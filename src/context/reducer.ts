import { UPDATE_COUNTRY } from "./actions";
import initialAppState from "./state";
import { Action } from "./types";

export default (state = initialAppState, action: Action) => {
    switch (action.type) {
        case UPDATE_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            }

        default:
            return state
    }
}