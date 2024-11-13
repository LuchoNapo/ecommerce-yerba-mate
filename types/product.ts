export type ProductType = {
    id: number;
    productName: string,
    slug: string,
    description: string,
    active: boolean,
    isFeatured: boolean,
    taste: string,
    origin: string,
    price: number,
    brand: string,
    weight: string,
    images: {
        id: number,
        url: string
    }[]
    category: {
        id: number,
        categoryName: string
    }
}

