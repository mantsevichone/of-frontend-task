import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";

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
