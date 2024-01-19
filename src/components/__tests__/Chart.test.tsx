// Import the render function from test-utils for testing React components
import { render } from '../../test-utils';

// Import the Chart component to be tested
import Chart from '../Chart';

// Describe the set of tests for the Chart component
describe('Chart Component', () => {
  // Test to ensure that the chart title is rendered correctly
  it('renders chart title correctly', () => {
    // Use the render function to create a testing environment for the Chart component
    const { getByText } = render(<Chart />);

    // Retrieve the element containing the chart title using the getByText query
    const titleElement = getByText('components.chart.title');

    // Assert that the title element is present in the document
    expect(titleElement).toBeInTheDocument();
  });
});
