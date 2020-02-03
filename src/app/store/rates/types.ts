export interface IState {
    rates: IRatesState
}

export interface IRatesState {
    base: string,
    rates: object,
    date: string,
    error: boolean
}

export interface IRates {
    base: string,
    rates: object,
    date: string,
    error?: boolean
}
