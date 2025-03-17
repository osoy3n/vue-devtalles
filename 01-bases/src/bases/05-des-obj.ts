interface Hero {
  name: string
  age: number
  codeName: string
  power?: string
}

export const person: Hero = {
  name: 'Tony',
  age: 38,
  codeName: 'Ironman',
}

const { name, age, power = 'No tiene'} = person // <-- Object or Array

console.log({name, age, power})

interface CreateHero {
  name: string
  age: number
  codeName: string
  power?: string
}

const createHero = ({ name, age, codeName, power }:CreateHero) => ({
  id: 123456,
  name: name,
  age: age,
  codeName: codeName,
  power: power ?? 'No tiene',
})

console.log(createHero(person))
