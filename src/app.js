/**
 * Проверка имени пользователя
 * @param {string} name
 * @returns {boolean}
 */

export const nameIsValid = (name) => !!name && name.length >= 2 && !name.includes(' ')

/**
 * Удаление пробелов из строки
 *
 * @param {string} text
 * @returns {string}
 */

export const fullTrim = (text) => (text || '').replace(/\s/g, '')

/**
 * Подсчёт суммы заказа
 *
 * @param {[{quantity: number, name?: string, price: number}]} items
 * @param {number} discount
 * @example getTotal([{ price: 10, quantity: 10 }]) // 100
 * @example getTotal([{ price: 10, quantity: 1 }]) // 10
 * @example getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]) // 100
 * @example getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 }) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 10) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 100) // 0
 */
export const getTotal = (items = [], discount = 0) => {
  if (typeof discount !== 'number') {
    throw new Error('Скидка должна быть числом')
  }
  if (discount < 0) {
    throw new Error('Процент скидки не может быть отрицательным')
  }
  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  return total - total * discount / 100
}

const randomObject = {
  Anna: 10,
  Petya: 15,
  Vasya: 20,
  Sergei: 50
}

const randomArrayOfObjects = [{
  Anna: 10,
  Petya: 15,
  Vasya: 20,
  Sergei: 50
},
{
  Katya: 10,
  Vova: 15,
  Pasha: 20
}]

const getScore = (obj = { default: 0 }) => {
  switch (typeof (obj)) {
    case 'object': {
      if (obj instanceof Array) {
        return 'Неверный тип данных'
      }

      const userScores = Object.values(obj)
      const initialValue = 0
      const sumWithInitial = userScores.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
      return sumWithInitial
    }
    default:
      return 'Неверный тип данных'
  }
}

getScore(randomObject)
getScore(randomArrayOfObjects)
getScore()
