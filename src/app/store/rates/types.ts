export interface IParams {
    base?: string,
    date?:  string,
    symbols: Array<string>,
}

export interface IRatesState {
    base: string,
    rates: object,
    symbols: Array<string>,
    date: string,
    error: boolean,
    currencyList: Array<string>
}

export interface IRates {
    base: string,
    rates: object,
    date:  string,
    error?: boolean
}
