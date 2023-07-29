export default {
  baseURL: process.env.TEST_BASE_URL,
  credentials: {
    username: process.env.VIKUNJA_TEST_LOGIN,
    password: process.env.VIKUNJA_TEST_PASS
  }
}
