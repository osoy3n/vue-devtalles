import type { GIFResponse } from "../interfaces/gif-response"
import { giphyApi } from "./10-axios"

export const getImage = async() => {
  try {
    const response = await giphyApi.get<GIFResponse>('/random')
    return response.data.data.images.downsized_large.url
  } catch (error) {
    throw 'Url no encontrada'
  }
}

getImage()
  .then(url => console.log(url))
  .catch(err => console.info(err))
