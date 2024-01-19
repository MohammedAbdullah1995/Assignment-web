import { render, screen } from '../../test-utils';
import UserDetails from '../UserInfo';

describe('UserDetails Component', () => {
  const mockProps = {
    email: 'test@example.com',
    username: 'testuser',
    country: 'US',
  };

  test('renders UserDetails component with provided props', () => {
    render(<UserDetails {...mockProps as any} />);

    // Check if the component renders the title
    expect(screen.getByText('components.userInfo.title')).toBeInTheDocument();

    // Check if the component renders the email, username, and country with translation keys
    expect(screen.getByText('components.userInfo.email')).toBeInTheDocument();
    expect(screen.getByText(mockProps.email)).toBeInTheDocument();

    expect(screen.getByText('components.userInfo.username')).toBeInTheDocument();
    expect(screen.getByText(mockProps.username)).toBeInTheDocument();

    expect(screen.getByText('components.userInfo.country')).toBeInTheDocument();
    expect(screen.getByText(mockProps.country)).toBeInTheDocument();
  });

});
