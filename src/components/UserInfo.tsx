/**
 * UserDetails Component
 * A component displaying user details including email, username, and country.
 * @param {UserDetailsProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */

import { Box, Grid, Typography, Divider } from "@mui/material";
import Title from "./Title";
import { COUNTRY_NAME } from "../util/enums";
import { useTranslation } from "react-i18next";

/**
 * Interface defining the properties for the UserDetails component.
 */
interface UserDetailsProps {
    email: string;
    username: string;
    country: COUNTRY_NAME;
}

/**
 * UserDetails Component
 * @param {UserDetailsProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */
const UserDetails = ({ email, username, country }: UserDetailsProps) => {
    const { t } = useTranslation();

    return (
        <>
            {/* User Details Title */}
            <Title>{t('components.userInfo.title')}</Title>

            {/* Email Section */}
            <Grid container>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        component="p"
                        variant="subtitle1"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        <b>{t('components.userInfo.email')}</b>
                    </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        component="p"
                        variant="body2"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {email}
                    </Typography>
                </Grid>
            </Grid>

            {/* Divider */}
            <Box mb={2} pt={2}>
                <Divider />
            </Box>

            {/* Username Section */}
            <Grid container>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        component="p"
                        variant="body2"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        <b>{t('components.userInfo.username')}</b>
                    </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        component="p"
                        variant="body2"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {username}
                    </Typography>
                </Grid>
            </Grid>

            {/* Divider */}
            <Box mb={2} pt={2}>
                <Divider />
            </Box>

            {/* Country Section */}
            <Grid container>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        component="p"
                        variant="body2"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        <b>{t('components.userInfo.country')}</b>
                    </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        component="p"
                        variant="body2"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {country}
                    </Typography>
                </Grid>
            </Grid>

            {/* Spacer */}
            <Box mb={2} pt={2}>
                {/* Additional spacing or content can be added here */}
            </Box>
        </>
    );
};

export default UserDetails;
