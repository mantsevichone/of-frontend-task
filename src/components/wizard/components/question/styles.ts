import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";

export const StyledTextField = styled(TextField)`
  & label {
    color: #1d1b20;
  }
  & label.Mui-focused {
    color: #5f3196;
  }
  & label.Mui-error {
    color: #ba1a1a;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #79747e;
    }
    &.Mui-focused fieldset {
      border-color: #5f3196;
      border-width: 3px;
    }
    &.Mui-error fieldset {
      border-color: #ba1a1a;
    }
  }

  & .MuiFormHelperText-root {
    color: #4a454e;

    &.Mui-error {
      color: #ba1a1a;
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-bottom: 16px;

  & .MuiCheckbox-root {
    color: #4a454e;

    &.Mui-checked {
      color: #5f3196;
    }
  }

  & .MuiTypography-root {
    font-size: 14px;
    color: #1e1a20;
    letter-spacing: 0.25px;
    line-height: 20px;
    margin: 0;
  }
`;
