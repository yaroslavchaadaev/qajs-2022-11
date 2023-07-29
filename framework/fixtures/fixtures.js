import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'

const name = {
  newRandomName: () => {
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
  }
}

export default name
