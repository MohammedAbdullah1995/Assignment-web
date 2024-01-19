import { COUNTRY_NAME } from "../util/enums";

export const UPDATE_COUNTRY = 'UPDATE_COUNTRY'
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'

// Update country to change theme
export const updateCountry = (payload: COUNTRY_NAME) => ({
    type: UPDATE_COUNTRY,
    payload
})

// Authenticate logged in user
export const authenticateUser = (payload: boolean) => ({
    type: AUTHENTICATE_USER,
    payload
})