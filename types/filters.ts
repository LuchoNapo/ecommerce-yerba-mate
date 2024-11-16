
export type FilterType = {
    result: ResultFilterType | null;
    loading: boolean;
    error: string | null;

}

export type ResultFilterType = {
    schema: {
        attributes: {
            taste: {
                enum: string[];
            },
            typeWeed: {
                enum: string[];
            },
            brand: {
                enum: string[];
            },
            weight: {
                enum: string[];
            },
            material: {
                enum: string[];
            }
            termoBrand:{
                enum: string[];
            }
            typeOfStraw:{
                enum: string[];
            }
        }
    }
}