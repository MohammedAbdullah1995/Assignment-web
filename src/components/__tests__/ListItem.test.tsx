import { render, screen } from '../../test-utils';
import MainListItems from '../ListItem';


describe('MainListItems Component', () => {
  test('renders MainListItems with translated text', () => {
    render(<MainListItems />);
    // Check if each list item with translated text is rendered
    expect(screen.getByText('components.listItem.dashboard')).toBeInTheDocument();
    expect(screen.getByText('components.listItem.orders')).toBeInTheDocument();
    expect(screen.getByText('components.listItem.customers')).toBeInTheDocument();
    expect(screen.getByText('components.listItem.reports')).toBeInTheDocument();
    expect(screen.getByText('components.listItem.integrations')).toBeInTheDocument();

     // Check if each list item icon is rendered
     expect(screen.getByTestId('DashboardIcon')).toBeInTheDocument();
     expect(screen.getByTestId('ShoppingCartIcon')).toBeInTheDocument();
     expect(screen.getByTestId('PeopleIcon')).toBeInTheDocument();
     expect(screen.getByTestId('BarChartIcon')).toBeInTheDocument();
     expect(screen.getByTestId('LayersIcon')).toBeInTheDocument();
  })

  
});
