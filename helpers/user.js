import supertest from 'supertest'
import config from '../framework/config/config.js'

const { baseURL } = config

let token = ''

// User controller
const user = {
  login: (payload) => {
    return supertest(baseURL)
      .post('/api/v1/login')
      .set('Accept', 'application/json')
      .send(payload)
  },

  async getAuthToken () {
    const payload = config.credentials
    const res = await this.login(payload)
    return res.body.token
  },

  async getAuthTokenFromCache () {
    token = await this.getAuthToken
    return token
  },

  userInfo: (token) => {
    return supertest(baseURL)
      .get('/api/v1/user')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
  },

  userAvatar: (token) => {
    return supertest(baseURL)
      .get(`/${config.credentials.username}/avatar`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
  }
}

export default user
