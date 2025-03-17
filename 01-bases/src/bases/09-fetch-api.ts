import type { GIFResponse } from "../interfaces/gif-response"

const apiKey = 'aeL8SFV4cHaabWEs2ZRcvcTD8ZOx7lyD'
const BASE_URL = 'https://api.giphy.com/v1/gifs/random'

fetch(`${BASE_URL}?api_key=${apiKey}`)
  .then(response => response.json())
  .then((body: GIFResponse) => {
    console.log(body.data.images.downsized_medium.url)
  })
  .catch(error => console.info(error))
