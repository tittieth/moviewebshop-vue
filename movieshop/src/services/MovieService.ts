import type { ICategory } from "@/models/ICategory";
import type { IMovie } from "@/models/IMovie";
import axios from "axios";

const BASE_URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/';

const get = async <T>(endpointData: string) => {
  return await axios.get<T>(`${BASE_URL}${endpointData}`);
};

export const getMovies = async (): Promise<IMovie[]> => {
  try {
    const response = await get<IMovie[]>('products');  
    return response.data;
  } catch (error) {
    console.log(error);
    throw error 
  }
};

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await get<ICategory[]>('categories');  
    return response.data;
  } catch (error) {
    console.log('error fetching' + error);
    throw error
  }
};

export const getSearchedMovies = async (searchText: string): Promise<IMovie[]> => {
  try {
    const response = await get<IMovie[]>(`s=${searchText}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
};

export const getMovieById = async (id: string): Promise<IMovie> => {
  try {
    const response = await get<IMovie>(`products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
};
