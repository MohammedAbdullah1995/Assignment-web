import { COUNTRY_NAME } from "../util/enums"

export type AppState = {
    selectedCountry : COUNTRY_NAME
    userAuthenticated : boolean
}

export type Action = {
    type : string,
    payload : any
}