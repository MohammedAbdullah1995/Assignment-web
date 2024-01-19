// Import necessary testing utilities and the Deposits component
import { render, screen, fireEvent } from '../../test-utils';
import Deposits from '../Deposits';

// Mock the link component from Mui
jest.mock('@mui/material/Link', () => (props: any) => {
    return (
        // Render a button instead of the actual Link component
        <button onClick={props.onClick}>View balance</button>
    )
})

// Describe the set of tests for the Deposits component
describe('Deposits Component', () => {
    // Test to ensure that the component renders title, link text, deposit amount, and date correctly
    test('renders title, link text, deposit amount, and date correctly', () => {
        // Render the Deposits component with a title and link text
        render(<Deposits title="Recent Deposits" linkText="View balance" />);
        // Simulate a click on the "View balance" button
        fireEvent.click(screen.getByText("View balance"))

        // Check if the component renders the correct title, link text, deposit amount, and date
        expect(screen.getByText('Recent Deposits')).toBeInTheDocument();
        expect(screen.getByText('View balance')).toBeInTheDocument();
        expect(screen.getByText('$3,024.00')).toBeInTheDocument();
        expect(screen.getByText('on 15 March, 2019')).toBeInTheDocument();
    });

});
