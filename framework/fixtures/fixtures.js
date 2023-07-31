import { faker } from '@faker-js/faker'

const randomString = faker

const name = {
  newRandomName: () => {
    return randomString.person.fullName()
  }
}

export default name
