// Import necessary testing utilities and the CountrySelect component
import { render, screen, fireEvent } from '@testing-library/react';
import CountrySelect from '../CountrySelect';

// Mock the Autocomplete component
jest.mock('@mui/material/Autocomplete', () => (props: any) => {
    // Mock the getOptionLabel function
    props.getOptionLabel(jest.fn())
    return (
        <div>
            {/* Render the input of the Autocomplete component */}
            <div data-testid="autocomplete-mock">{props.renderInput({})}</div>
            {/* Map through options and render each option and a button */}
            {props.options.map((data: any) => (
                <>
                    {props.renderOption(undefined, data)}
                    <button key={data.value} onClick={props.onChange(undefined, data)}>{data.label}</button>
                </>
            ))}
        </div>
    )
})

// Mock the countryDropDownData
jest.mock('../../util/constants', () => ({
    countryDropDownData: [
        { label: 'USA', code: 'US' },
        { label: 'Canada', code: 'CA' },
    ],
}));

// Describe the set of tests for the CountrySelect component
describe('CountrySelect Component', () => {
    // Test to ensure that the component renders without crashing
    test('renders without crashing', () => {
        // Render the CountrySelect component with a mock onChange function and label
        render(<CountrySelect onChange={() => { }} label="Select Country" />);
        // Check if the component renders without crashing
        expect(screen.getByLabelText('Select Country')).toBeInTheDocument();
    });

    // Test to ensure that selecting a country triggers the onChange function
    test('selects a country', () => {
        // Create a mock onChange function
        const onChangeMock = jest.fn();
        // Render the CountrySelect component with the mock onChange function and label
        render(<CountrySelect onChange={onChangeMock} label="Select Country" />);

        // Select a country from the list by clicking on it
        fireEvent.click(screen.getByText('USA'));

        // Check if onChange is called with the selected country
        expect(onChangeMock).toHaveBeenCalledWith({ label: 'USA', code: 'US' });
    });

});
