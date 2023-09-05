import type { IMovie } from "@/models/IMovie";
import axios from "axios";

const BASE_URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/';

const get = async <T>(endpointData: string) => {
  return await axios.get<T>(`${BASE_URL}${endpointData}`);
};

export const getMovies = async (searchText: string): Promise<IMovie[]> => {
  let response = await get<IMovie[]>(`s=${searchText}`);
  return response.data;
};

export const getMovieById = async (id: string): Promise<IMovie> => {
  let response = await get<IMovie>(`i=${id}`);
  return response.data;
};