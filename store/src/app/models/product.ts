export interface IProduct {
    CategoryId: string;
    Image: string;
    Title: string;
    Price: number;
    Description: string;
}

export interface IAddProduct {
    category: string;
    image: string;
    title: string;
    price: number;
    description: string;
}