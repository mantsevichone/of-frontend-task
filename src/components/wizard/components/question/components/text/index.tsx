import InputAdornment from "@mui/material/InputAdornment";
import ErrorIcon from "@mui/icons-material/Error";

import { StyledTextField } from "@/components/wizard/styles";

interface Props {
  label?: string;
  value: string;
  onChange: () => void;
  helperText?: string;
  error: boolean;
}

export function TextQuestion({
  label,
  value,
  onChange,
  helperText,
  error,
}: Props) {
  return (
    <StyledTextField
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={!!error}
      slotProps={{
        input: {
          endAdornment: error && (
            <InputAdornment position="end">
              <ErrorIcon sx={{ color: "#BA1A1A" }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
