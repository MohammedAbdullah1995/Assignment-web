import { render, screen, fireEvent, waitFor } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import SignIn from '../login';
import { act } from 'react-dom/test-utils';
import useLoginAPI from '../../hooks/useLoginAPI';

//Mock navigation to assert based on mockedUsedNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

//initial mock for useLoginAPI
jest.mock('../../hooks/useLoginAPI', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('SignIn', () => {

    test('renders sign-in form', () => {
        (useLoginAPI as jest.Mock).mockImplementation(() => ({
            authenticated: true
        }))
        render(<SignIn />);
        expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
        expect(screen.getByLabelText('Select country')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Remember me')).toBeInTheDocument();
    });

    test('submits the form with valid data', async () => {
        // Mock success response
        (useLoginAPI as jest.Mock).mockImplementation(() => ({
            login: jest.fn(() => Promise.resolve({ authenticated: true, country: 'UAE', email: 'test@example.com', username: 'testuser' })),
            isLoading: false
        }))

        render(<SignIn />);
        const submitButton = screen.getByRole('button', { name: 'Sign in' })

        // Fill in the username and password
        act(()=>{
            userEvent.type(screen.getByLabelText('Username'), 'testuser');
            userEvent.type(screen.getByTestId('password').children[1].children[0], 'password');
        })

        await waitFor(() => {
            expect(submitButton).toBeEnabled()
            // Submit the form
            act(() => {
                userEvent.click(submitButton);
            })
            expect(mockedUsedNavigate).toHaveBeenCalledWith('dashboard', { state: { country: 'UAE', email: 'test@example.com', username: 'testuser' } });
        });
    });

      test('displays error message when login fails', async () => {
        // Mock error response
        (useLoginAPI as jest.Mock).mockImplementation(() => ({
            login: jest.fn(() => Promise.resolve({ authenticated: false, errorMessage : "something went wrong" })),
            isLoading: false
        }))

        render(<SignIn />);
        const submitButton = screen.getByRole('button', { name: 'Sign in' })

        // Fill in the username and password
        act(()=>{
            userEvent.type(screen.getByLabelText('Username'), 'testuser');
            userEvent.type(screen.getByTestId('password').children[1].children[0], 'password');
        })

        await waitFor(() => {
            expect(submitButton).toBeEnabled()
            // Submit the form
            act(() => {
                userEvent.click(submitButton);
            })
            expect(screen.getByText("something went wrong")).toBeInTheDocument()
        });

      });

});
