export function greetPerson(name:string) {
  return `Hola, ${name}`
}

export const greetPersonArrow = (name:string) => {
  return `Hola, ${name}`
}

export const greetPersonSingleArrow = (name:string) => `Hola, ${name}`

export const getUser = () => {
  return {
    uid: 'ABC-123',
    username: 'tony001'
  }
}

export const getUserSingle = () => ({
  uid: 'ABC-123',
  username: 'tony001'
})

const heroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
    power: 'Super Fuerza'
  }
]

const hero = heroes.find((h) => h.id === 1)

console.log(hero?.power)