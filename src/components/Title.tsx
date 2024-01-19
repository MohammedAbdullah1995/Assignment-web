/**
 * Title Component
 * A component rendering a title with specific styling.
 * @param {TitleProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */

import * as React from 'react';
import Typography from '@mui/material/Typography';

/**
 * Interface defining the properties for the Title component.
 */
interface TitleProps {
  children?: React.ReactNode;
}

/**
 * Title Component
 * @param {TitleProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Title(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
