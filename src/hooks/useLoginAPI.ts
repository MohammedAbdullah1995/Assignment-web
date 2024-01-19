/**
 * Custom Hook: useLoginAPI
 * Manages the authentication process using the login API.
 */

import { useState } from "react";
import { LoginHookResponse, LoginPayload } from "../util/interfaces";
import { decode } from 'base-64';
import { LOGIN } from "../network/endpoints";

const useLoginAPI = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Fetch API key from environment variables
    const apiKey = process.env.REACT_APP_FIREBASE_DB_KEY;
    const url = `${LOGIN}?auth=${apiKey}`;

    /**
     * Authenticate user using the login API.
     * @param {LoginPayload} payload - The user's login credentials.
     * @returns {Promise<LoginHookResponse>} - Promise resolving to authentication response.
     */
    const login = async (payload: LoginPayload): Promise<LoginHookResponse> => {
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'GET',
            });
            const json = await response.json();
            return authenticateUser(json, payload);
        } catch {
            return { authenticated: false, errorMessage: 'login.errorMessages.sysError' };
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Authenticate user based on the retrieved user data.
     * @param {object} users - User data retrieved from the API.
     * @param {LoginPayload} unauthenticatedUser - User's login credentials.
     * @returns {LoginHookResponse} - Authentication response.
     */
    const authenticateUser = (users: object, unauthenticatedUser: LoginPayload): LoginHookResponse => {
        const authenticatedUserKey: string | undefined = Object.keys(users).find((key) => {
            const { username, password } = users[key as keyof typeof users];
            const decryptedUsername = decode(username);
            const decryptedPassword = decode(password);
            return decryptedUsername === unauthenticatedUser.username && decryptedPassword === unauthenticatedUser.password;
        });

        if (authenticatedUserKey) {
            const { country, email } = users[authenticatedUserKey as keyof typeof users];
            return { authenticated: true, country, email, username: unauthenticatedUser.username } as LoginHookResponse;
        } else {
            return { authenticated: false, errorMessage: 'login.errorMessages.noAuth' } as LoginHookResponse;
        }
    };

    return {
        login,
        isLoading,
    };
};

export default useLoginAPI;
