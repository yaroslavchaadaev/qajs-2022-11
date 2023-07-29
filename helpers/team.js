import supertest from 'supertest'
import config from '../framework/config/config.js'
import fixtures from '../framework/fixtures/fixtures.js'

const { baseURL } = config

const team = {
  createTeam: (token) => {
    return supertest(baseURL)
      .put('/api/v1/teams')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: `${fixtures.newRandomName()}` })
  },
  getAllTeams: (token) => {
    return supertest(baseURL)
      .get('/api/v1/teams')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
  }
}

export default team
