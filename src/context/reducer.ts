import { AUTHENTICATE_USER, UPDATE_COUNTRY } from "./actions";
import initialAppState from "./state";
import { Action } from "./types";

export default (state = initialAppState, action: Action) => {
    switch (action.type) {
        case UPDATE_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            }

        case AUTHENTICATE_USER:
            return {
                ...state,
                userAuthenticated: action.payload
            }

        default:
            return state
    }
}