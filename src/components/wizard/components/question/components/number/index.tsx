import type { ChangeEvent } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorIcon from "@mui/icons-material/Error";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { StyledTextField } from "@/components/wizard/styles";
import { ArrowContainer } from "./styles";

interface Props {
  label?: string;
  value: string;
  onChange: (str: string) => void;
  helperText?: string;
  error: boolean;
}

export function NumberQuestion({
  label,
  value,
  onChange,
  helperText,
  error,
}: Props) {
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");

    const formattedValue =
      numericValue.startsWith("0") && numericValue.length > 1
        ? numericValue.slice(1)
        : numericValue;

    onChange(formattedValue);
  };

  const increment = () => {
    const currentValue = parseInt(value);
    const newValue = Number.isNaN(currentValue) ? 1 : currentValue + 1;

    onChange(newValue.toString());
  };

  const decrement = () => {
    const currentValue = parseInt(value);
    let newValue;

    if (Number.isNaN(currentValue) || currentValue === 0) {
      newValue = 0;
    } else {
      newValue = currentValue - 1;
    }

    onChange(newValue.toString());
  };

  return (
    <StyledTextField
      label={label}
      value={value}
      onChange={handleNumberChange}
      helperText={helperText}
      error={error}
      inputMode="numeric"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {error ? (
                <ErrorIcon sx={{ color: "#BA1A1A" }} />
              ) : (
                <ArrowContainer>
                  <IconButton size="small" onClick={increment}>
                    <ArrowDropUpIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton size="small" onClick={decrement}>
                    <ArrowDropDownIcon fontSize="inherit" />
                  </IconButton>
                </ArrowContainer>
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
