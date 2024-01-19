
import { render, fireEvent, screen } from '../../test-utils';
import Header from '../Header';


jest.mock('../../util/constants', () => ({
    LanDropDownData: [
        { value: 'en' },
        { value: 'fr' },
    ],
}));

describe('Header Component', () => {
  test('renders header with language dropdown and handles language change', async() => {
    render(<Header />);

    // Check if the header text is rendered
    expect(screen.getByText('Assignment')).toBeInTheDocument();

    // Check if the language dropdown is rendered
    const languageDropdown = screen.getByText('EN');
    expect(languageDropdown).toBeInTheDocument();

    //expand the dropdown
    fireEvent.mouseDown(languageDropdown)
    // Select a different language from the dropdown
    fireEvent.click(screen.getByRole("option",{name : "FR"}))
  });

});
