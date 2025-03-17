import axios from 'axios'

// import type { GIFResponse } from "../interfaces/gif-response"

const apiKey = 'aeL8SFV4cHaabWEs2ZRcvcTD8ZOx7lyD'

export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: apiKey
  }
})

// giphyApi.get<GIFResponse>('/random')
//   .then(response => console.log(response.data.data.images.downsized_medium.url))
//   .catch(error => console.log(error))
