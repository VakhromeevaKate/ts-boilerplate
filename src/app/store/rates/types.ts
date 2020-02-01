export interface IRatesState {
    rates: IRates;
    error: boolean
}

export interface IRates {
    data: any
    error?: boolean
}
