/**
 * Deposits Component
 * A component displaying recent deposits with a title, deposit amount, date, and a link.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title for the deposits section.
 * @param {string} props.linkText - The text for the link associated with the deposits.
 * @returns {JSX.Element} - The rendered component.
 */
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

interface DepositsProps {
    title: string;
    linkText: string;
}

/**
 * Prevents the default behavior of an event.
 * @param {React.MouseEvent} event - The mouse event.
 */
function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

/**
 * Deposits Component
 * @param {DepositsProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Deposits(props: DepositsProps) {
    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    {props.linkText}
                </Link>
            </div>
        </React.Fragment>
    );
}
