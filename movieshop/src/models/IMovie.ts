import type { ICategory } from "./ICategory";

export interface IMovie {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    year: number;
    added: string;
    productCategory: [
        categoryId: number,
        category: string
    ]
}