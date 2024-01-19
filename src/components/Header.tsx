/**
 * Header Component
 * A component representing the header of the application with a title and a language selection dropdown.
 * @returns {JSX.Element} - The rendered component.
 */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import i18n from '../config/i18n';
import { LanDropDownData } from '../util/constants';

/**
 * Header Component
 * @returns {JSX.Element} - The rendered component.
 */
const Header = () => {
    const [lan, setLan] = React.useState<string>('en');

    /**
     * Handles the change of the language selection dropdown.
     * @param {SelectChangeEvent<string>} event - The change event of the language selection dropdown.
     */
    const handleLanChange = (event: SelectChangeEvent<string>) => {
        i18n.changeLanguage(event.target.value);
        setLan(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Assignment
                    </Typography>
                    <Box bgcolor="white" width="70px">
                        <Select
                            labelId="lan-dropdown"
                            id="lan-dropdown"
                            value={lan}
                            fullWidth
                            label="Select Language"
                            onChange={handleLanChange}
                            style={{ backgroundColor: 'white' }}
                        >
                            {LanDropDownData.map(({ value }) => (
                                <MenuItem key={value} value={value}>
                                    {value.toLocaleUpperCase()}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
