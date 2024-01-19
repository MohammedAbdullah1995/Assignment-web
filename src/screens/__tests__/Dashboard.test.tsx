import { render, screen, fireEvent } from '../../test-utils';
import Dashboard from '../Dashboard';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key:any) => key }),
}));

const mockLocationState = {
  email: 'test@example.com',
  username: 'testuser',
  country: 'US',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: mockLocationState,
  }),
}));

describe('Dashboard', () => {
  test('renders dashboard with user info and components', () => {
    render(<Dashboard />);
    
    // Check if the user information is displayed
    expect(screen.getByText('components.userInfo.title')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.getByText('US')).toBeInTheDocument();

    // Check if the components are rendered
    expect(screen.getByText('components.chart.title')).toBeInTheDocument();
    expect(screen.getByText('components.deposits.title')).toBeInTheDocument();
    expect(screen.getByText('components.orders.title')).toBeInTheDocument();
  });

  test('toggles the drawer',async () => {
    render(<Dashboard />);

    // Check if the drawer is open by default
    expect(screen.getByText('components.orders.title')).toBeInTheDocument();

    // Toggle the drawer
    fireEvent.click(screen.getByLabelText('open drawer'));
    
    // Check if the drawer is closed after toggle
        expect(screen.queryByLabelText('components.orders.title')).not.toBeInTheDocument();
  });
})

