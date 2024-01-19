import { fireEvent, render, screen } from '../../test-utils';
import Orders from '../Orders';

describe('Orders Component', () => {
  const mockProps = {
    title: 'Recent Orders',
    linkText: 'See more orders',
    firstCell: 'Date',
    secondCell: 'Name',
    thirdCell: 'Shipt To',
    fourthCell: 'Payment Method',
    fifthCell: 'Sale Amount',
  };

  test('renders Orders component with provided props', () => {
    render(<Orders {...mockProps} />);

    // Check if the title and link text are rendered
    expect(screen.getByText('Recent Orders')).toBeInTheDocument();
    expect(screen.getByText('See more orders')).toBeInTheDocument();
    fireEvent.click(screen.getByText('See more orders'))

    // Check if the table headers are rendered
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Shipt To')).toBeInTheDocument();
    expect(screen.getByText('Payment Method')).toBeInTheDocument();
    expect(screen.getByText('Sale Amount')).toBeInTheDocument();

    // Check if the rows are rendered
    expect(screen.getAllByText('16 Mar, 2019')[0]).toBeInTheDocument();
    expect(screen.getByText('Elvis Presley')).toBeInTheDocument();
    expect(screen.getByText('Tupelo, MS')).toBeInTheDocument();
    expect(screen.getByText('VISA ⠀•••• 3719')).toBeInTheDocument();
    expect(screen.getByText('$312.44')).toBeInTheDocument();
  });

});
