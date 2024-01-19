/**
 * Orders Component
 * A component displaying a table of orders.
 * @param {OrdersProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */

import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

/**
 * Interface defining the properties for the Orders component.
 */
interface OrdersProps {
  title: string;
  linkText: string;
  firstCell: string;
  secondCell: string;
  thirdCell: string;
  fourthCell: string;
  fifthCell: string;
}

/**
 * Function to create order data.
 * @param {number} id - The order ID.
 * @param {string} date - The order date.
 * @param {string} name - The customer name.
 * @param {string} shipTo - The shipping location.
 * @param {string} paymentMethod - The payment method.
 * @param {number} amount - The order amount.
 * @returns {object} - The order data.
 */
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

// Mock data (typically fetched from a backend)
const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

/**
 * Function to prevent the default action for a click event.
 * @param {React.MouseEvent} event - The click event.
 */
function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

/**
 * Orders Component
 * @param {OrdersProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Orders(props: OrdersProps) {
  return (
    <>
      <Title>{props.title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{props.firstCell}</TableCell>
            <TableCell>{props.secondCell}</TableCell>
            <TableCell>{props.thirdCell}</TableCell>
            <TableCell>{props.fourthCell}</TableCell>
            <TableCell align="right">{props.fifthCell}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount.toFixed(2)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        {props.linkText}
      </Link>
    </>
  );
}
