import { renderHook, act } from '@testing-library/react-hooks';
import useLoginAPI from '../useLoginAPI';


const mockedResponse = {
    "-No7z25BzSr-pFrPE2bF": {
        "country": "testCountry",
        "email": "test@example.com",
        "password": "dGVzdHBhc3N3b3Jk",
        "username": "dGVzdHVzZXI="
    }
}

describe('useLoginAPI', () => {

    test('should perform login successfully', async () => {
        //mock fetch for api calls
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockedResponse),
        } as any);

        const { result, waitForNextUpdate } = renderHook(() => useLoginAPI());

        // Simulate a successful login request
        let response = {}
        act(async () => {
            response = await result.current.login({ username: 'testuser', password: 'testpassword' });
        });

        await waitForNextUpdate();

        // Assert the state after a successful login
        expect(result.current.isLoading).toBe(false);
        expect(response).toEqual({
            authenticated: true,
            country: 'testCountry',
            email: 'test@example.com',
            username: 'testuser',
        });
    });

    test('should handle login failure', async () => {
        //mock fetch for api calls
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockedResponse),
        } as any);
        const { result, waitForNextUpdate } = renderHook(() => useLoginAPI());

        let response = {}
        act(async () => {
          response = await result.current.login({ username: 'invaliduser', password: 'invalidpassword' });
        });

        await waitForNextUpdate();

        // Assert the state after a failed login
        expect(result.current.isLoading).toBe(false);
        expect(response).toEqual({
            authenticated: false,
            errorMessage: 'login.errorMessages.noAuth',
        });
    });

    test('should handle system error', async () => {
        //mock fetch for api calls
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockRejectedValue(new Error),
        } as any);
        const { result, waitForNextUpdate } = renderHook(() => useLoginAPI());

        let response = {}
        act(async () => {
          response = await result.current.login({ username: 'invaliduser', password: 'invalidpassword' });
        });

        await waitForNextUpdate();

        // Assert the state after a system error
        expect(result.current.isLoading).toBe(false);
        expect(response).toEqual({
            authenticated: false,
            errorMessage: 'login.errorMessages.sysError',
        });
    });
});
