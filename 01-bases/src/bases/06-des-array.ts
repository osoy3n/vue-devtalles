const character = ['Goku', 'Vegueta', 'Trunks', 'Goten']

const [,,t] = character
console.log({t})

const returnArray = () => {
  return [123, 'ABC'] as const
}

const [ numbers, letters ] = returnArray()
console.log(numbers * 2, letters.toLowerCase())
