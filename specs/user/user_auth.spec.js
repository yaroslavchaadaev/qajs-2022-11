import supertest from 'supertest'
import config from '../../framework/config/config.js'
import user from '../../helpers/user.js'

describe('User auth tests', () => {
  it('Positive: successfully logged in', async () => {
    const res = await user.login(config.credentials)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(typeof res.body.token).toBe('string')
  })
  it('Negative: error with empty credentials', async () => {
    const res = await user.login({ username: '', password: '' })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toEqual('Please specify a username and a password.')
  })
})

describe('Get user info', () => {
  it('Positive: successfully got user info', async () => {
    const token = await user.getAuthToken()
    const res = await user.userInfo(token)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('username')
    expect(res.body.username).toBe('demo')
  })
  it('Negative: unauthorised user', async () => {
    const res = await user.userInfo()
    expect(res.status).toBe(401)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toBe('invalid or expired jwt')
  })
})
