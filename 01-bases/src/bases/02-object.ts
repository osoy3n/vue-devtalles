export const person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 38,
  address: {
    city: 'New York',
    zip: 15686,
    lat: 14.55688,
    lgn: 36.5548
  }
} // as const

// const person2 = {...person, address: {...person.address}}
const person2 = structuredClone(person)

person2.firstName = 'Parker'
person2.address.city = 'Miami'

console.log({person})
console.log({person2})
