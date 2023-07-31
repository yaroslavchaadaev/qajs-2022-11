import user from '../../helpers/user.js'
import team from '../../helpers/team.js'
import name from '../../framework/fixtures/fixtures.js'

describe('Some tests with teams', () => {
  it('Positive: successfully create new team', async () => {
    const token = await user.getAuthToken()
    const newRandomName = name.newRandomName()
    const res = await team.createTeam(token, newRandomName)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('name')
    expect(typeof res.body.name).toBe('string')
    expect(res.body.name).not.toBe('')
  })
  it('Positive: created team is showed in the GET /api/v1/teams', async () => {
    const token = await user.getAuthToken()

    const newRandomName = name.newRandomName()
    let res = await team.createTeam(token, newRandomName)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    const newTeamID = res.body.id
    expect(res.body).toHaveProperty('name')
    const newTeamName = res.body.name
    expect(res.body).toHaveProperty('description')

    res = await team.getAllTeams(token)
    const newTeamArray = res.body.filter(item => item.id === newTeamID)
    expect(newTeamArray).toHaveLength(1)
    newTeamArray.forEach(item => {
      expect(item.name).toBe(newTeamName)
      expect(item.description).toBe('')
    })
  })
})
