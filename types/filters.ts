
export type FilterType = {
    result: ResultFilterType | null;
    loading: boolean;
    error: string | null;

}

export type ResultFilterType = {
    schema: {
        attributes: {
            origin: {
                enum: string[];
            }
        }
    }
}