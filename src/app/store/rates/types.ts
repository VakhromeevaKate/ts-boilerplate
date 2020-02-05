export interface IParams {
    base?: string,
    date?:  string,
    symbols?: string,
}

export interface IRatesState {
    base: string,
    rates: object,
    symbol: string,
    date: string,
    error: boolean
}

export interface IRates {
    base: string,
    rates: object,
    date:  string,
    error?: boolean
}
