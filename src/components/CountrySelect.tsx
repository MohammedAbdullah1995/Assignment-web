/**
 * CountrySelect Component
 * A component that provides an Autocomplete dropdown for selecting a country.
 * It uses the Autocomplete and TextField components from MUI.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onChange - Callback function triggered when a country is selected.
 * @param {string} props.label - The label for the Autocomplete dropdown.
 * @returns {JSX.Element} - The rendered component.
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countryDropDownData } from '../util/constants';

interface CountrySelectProps {
    onChange: (value: object | null) => void,
    label: string
}

export default function CountrySelect({ onChange, label }: CountrySelectProps) {

    /**
     * Handles the change event when a country is selected.
     * @param {React.SyntheticEvent<Element, Event>} e - The synthetic event.
     * @param {Object | null} value - The selected country object.
     */
    const handleCountryChange = (e: React.SyntheticEvent<Element, Event>, value: object | null) => {
        onChange(value);
    }

    return (
        <Autocomplete
            id="country-select-demo"
            options={countryDropDownData}
            onChange={handleCountryChange}
            defaultValue={countryDropDownData[0]}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {option.label} ({option.code})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
