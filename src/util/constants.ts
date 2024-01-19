// Import the country enum representing country names.
import { COUNTRY_NAME } from "./enums";

// Define an array of objects containing data for country dropdowns, language dropdown, and username validation rules.
export const countryDropDownData = [
    { code: 'AE', label: 'United Arab Emirates', phone: '971', countryName: COUNTRY_NAME.UAE },
    { code: 'IN', label: 'India', phone: '91', countryName: COUNTRY_NAME.IN },
    { code: 'PK', label: 'Pakistan', phone: '92', countryName: COUNTRY_NAME.PK },
    { code: 'EG', label: 'Egypt', phone: '20', countryName: COUNTRY_NAME.EG }
];

export const LanDropDownData = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
];

// Define rules for validating usernames based on the country.
export const usernameCountryRules = {
    [COUNTRY_NAME.UAE]: { regex: /^[a-zA-Z0-9]{5,}$/, errorMessage: 'validations.uae.username' },
    [COUNTRY_NAME.IN]: { regex: /^[a-zA-Z][a-zA-Z0-9]{5,}$/, errorMessage: 'validations.in.username' },
    [COUNTRY_NAME.EG]: { regex: /^[a-zA-Z]{2}[a-zA-Z0-9]*\d[a-zA-Z0-9]*$/, errorMessage: 'validations.eg.username' },
    [COUNTRY_NAME.PK]: { regex: /^[a-zA-Z]{3}[a-zA-Z0-9]{4,}$/, errorMessage: 'validations.pk.username' }
};

// Define common validation rules (e.g., required field).
export const commonRules = {
    required: {
        value: true,
        message: 'validations.required'
    }
};

// Define a function to validate usernames based on the provided value and country.
export const validateUsername = (value: string, countryName: COUNTRY_NAME) => {
    const { regex, errorMessage } = usernameCountryRules[countryName];
    const countryRegex = new RegExp(regex);
    return countryRegex.test(value) ? true : errorMessage;
};
