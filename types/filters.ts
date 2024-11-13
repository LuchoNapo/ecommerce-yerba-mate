
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
            origin: {
                enum: string[];
            },
            brand: {
                enum: string[];
            },
            weight: {
                enum: string[];
            },
        }
    }
}