// Interface representing country details
export interface CountryType {
  code: string;      // Country code
  label: string;     // Country label
  phone: string;     // Country phone code
  suggested?: boolean;  // Optional flag indicating if the country is suggested
}

// Interface representing login credentials
export interface LoginPayload {
  username: string;   // User's username
  password: string;   // User's password
}

// Interface representing the response from the login hook
export interface LoginHookResponse {
  authenticated: boolean;  // Flag indicating if the user is authenticated
  country?: string;        // User's country
  errorMessage?: string;   // Error message in case of authentication failure
  username?: string;       // User's username
  email?: string;          // User's email
}

// Interface representing the state of an alert
export interface AlertState {
  open: boolean;          // Flag indicating if the alert is open
  errorMessage: string;   // Error message to be displayed in the alert
}
