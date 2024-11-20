export type ProductType = {
    id: number;
    productName: string,
    slug: string,
    description: string,
    active: boolean,
    isFeatured: boolean,
    taste: string,
    typeWeed: string,
    price: number,
    brand: string,
    weight: string,
    material: string,
    termoBrand: string,
    typeOfStraw: string,
    quantity: number,
    images: {
        id: number,
        url: string
    }[]
    category: {
        id: number,
        categoryName: string
    }
}

