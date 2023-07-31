import supertest from 'supertest'
import config from '../framework/config/config.js'

const { baseURL } = config

const team = {
  createTeam: (token, newRandomName) => {
    return supertest(baseURL)
      .put('/api/v1/teams')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: newRandomName })
  },
  getAllTeams: (token) => {
    return supertest(baseURL)
      .get('/api/v1/teams')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
  }
}

export default team
