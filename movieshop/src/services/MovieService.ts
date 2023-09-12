import type { ICategory } from '@/models/ICategory'
import type { IMovie } from '@/models/IMovie'
import type { IOrder } from '@/models/IOrder'
import axios from 'axios'

const BASE_URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/'

const get = async <T>(endpointData: string) => {
  return await axios.get<T>(`${BASE_URL}${endpointData}`)
}

export const getMovies = async (): Promise<IMovie[]> => {
  try {
    const response = await get<IMovie[]>('products')
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await get<ICategory[]>('categories')
    return response.data
  } catch (error) {
    console.log('error fetching' + error)
    throw error
  }
}

export const getSearchedMovies = async (searchText: string): Promise<IMovie[]> => {
  try {
    const response = await get<IMovie[]>(`search?searchtext=${searchText}`)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getMovieById = async (id: string): Promise<IMovie> => {
  try {
    const response = await get<IMovie>(`products/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const createOrder = async (order: IOrder) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order)
    console.log('order skapad' + response)
    return response
  } catch (error) {
    console.log(error)
  }
}
