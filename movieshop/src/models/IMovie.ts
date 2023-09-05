import type { ICategory } from "./ICategory";

export interface IMovie {
    id: number;
    name: string;
    description: string;
    price: number;
    iamgeUrl: string;
    year: number;
    added: string;
    productCategory: ICategory;
}