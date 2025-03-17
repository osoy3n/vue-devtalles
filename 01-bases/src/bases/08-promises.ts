import type { Hero } from "../data/heroes"
import { getHeroById } from "./07-imp-exp"


const getHeroByIdAsync = (id: number):Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id)

      hero ? resolve(hero) : reject(`Héroe no encontrado con id #: ${id}`)

    }, 1500)
  })
}

getHeroByIdAsync(1)
  .then(hero => console.log('Héroe: ', hero.name))
  .catch(errMessage => console.log(errMessage))

// console.log('Start')

// new Promise((resolve, reject) => {

//   setTimeout(() => {
//     // resolve('Cumple la promesa')

//     reject('No cumple la promesa')
//   }, 1000)

// })
//   .then(message => console.log(message))
//   .catch(errorMessage => console.log(errorMessage))
//   .finally(() => console.log('Fin de la promesa'))

// console.log('End')
