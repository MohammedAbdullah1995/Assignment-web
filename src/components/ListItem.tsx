/**
 * MainListItems Component
 * A component representing the main list items in the sidebar navigation.
 * @returns {JSX.Element} - The rendered component.
 */

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { useTranslation } from 'react-i18next';

/**
 * MainListItems Component
 * @returns {JSX.Element} - The rendered component.
 */
const MainListItems = () => {
    const { t } = useTranslation();

    return (
        <>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={t('components.listItem.dashboard')} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={t('components.listItem.orders')} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary={t('components.listItem.customers')} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={t('components.listItem.reports')} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary={t('components.listItem.integrations')} />
            </ListItemButton>
        </>
    );
};

export default MainListItems;
