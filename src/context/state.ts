import { COUNTRY_NAME } from "../util/enums";
import { AppState } from "./types";

const initialAppState: AppState = {
    selectedCountry: COUNTRY_NAME.UAE,
    userAuthenticated : false
}

export default initialAppState