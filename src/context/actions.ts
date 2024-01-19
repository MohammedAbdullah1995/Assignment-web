import { COUNTRY_NAME } from "../util/enums";

export const UPDATE_COUNTRY = 'UPDATE_COUNTRY'

// Update country to change theme
export const updateCountry = (payload: COUNTRY_NAME) => ({
    type: UPDATE_COUNTRY,
    payload
})