/**
 * SignIn Component
 * Main component for the sign-in page.
 * Displays a form for user login, including username, password, and country selection.
 */

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import CountrySelect from '../../components/CountrySelect';
import { DispatchContext } from '../../context';
import { updateCountry } from '../../context/actions';
import { COUNTRY_NAME } from '../../util/enums';
import { useForm, Controller } from 'react-hook-form';
import { commonRules, validateUsername } from '../../util/constants';
import Header from '../../components/Header';
import { AlertState, LoginPayload } from '../../util/interfaces';
import useLoginAPI from '../../hooks/useLoginAPI';
import { LoadingButton } from '@mui/lab';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

// SignIn component definition
export default function SignIn() {
  // Hooks and state variables
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = React.useState<COUNTRY_NAME>(COUNTRY_NAME.UAE);
  const [alert, setAlert] = React.useState<AlertState>({ open: false, errorMessage: '' });
  const dispatchContext = React.useContext(DispatchContext);
  const { login, isLoading } = useLoginAPI();
  const navigate = useNavigate();
  const {
    control,
    formState: { errors, isValid },
    trigger,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // Event handler for country change
  const handleCountryChange = (value: any) => {
    setSelectedCountry(value?.countryName);
    trigger('username');
  };

  // Event handler for form submission (login)
  const handleLogin = async (data: LoginPayload) => {
    setAlert({ open: false, errorMessage: '' });
    const result = await login(data);

    if (result?.authenticated) {
      const { country, email, username } = result;
      dispatchContext(updateCountry(country as COUNTRY_NAME));
      // navigate to dashboard
      navigate('dashboard', { state: { country, email, username } });
    } else {
      setAlert({ open: true, errorMessage: result.errorMessage || '' });
    }
  };

  // JSX structure
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Avatar */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          {/* Title */}
          <Typography component="h1" variant="h5">
            {t('login.signIn')}
          </Typography>
          {/* Form */}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Box mb={2}>
              {alert.open && <Alert severity="error">{t(alert.errorMessage)}</Alert>}
            </Box>
            {/* Country Select */}
            <CountrySelect label={t('login.selectCountry')} onChange={handleCountryChange} />
            {/* Username Field */}
            <Controller
              control={control}
              name="username"
              rules={{
                ...commonRules,
                validate: (value) => validateUsername(value, selectedCountry || COUNTRY_NAME.UAE),
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  error={!!errors.username}
                  helperText={t(errors?.username?.message || '')}
                  id={t('login.labels.username')}
                  label={t('login.labels.username')}
                  name="username"
                  autoComplete="username"
                />
              )}
            />
            {/* Password Field */}
            <Controller
              control={control}
              name="password"
              rules={{
                ...commonRules,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  error={!!errors.password}
                  helperText={t(errors.password?.message || '')}
                  data-testid="password"
                  label={t('login.labels.password')}
                  type="password"
                  id={t('login.labels.password')}
                  autoComplete="current-password"
                />
              )}
            />
            {/* Remember Me Checkbox */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('login.rememberMe')}
            />
            {/* Login Button */}
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
              disabled={!isValid}
              onClick={handleSubmit(handleLogin)}
              loading={isLoading}
            >
              {t('login.signIn')}
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}
