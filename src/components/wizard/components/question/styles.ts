import { type ControllerFieldState } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Slider, { type SliderProps } from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled, { type StyledOptions } from "@emotion/styled";
import { css } from "@emotion/react";

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

type ComposedSliderProps = SliderProps & {
  fieldSate: ControllerFieldState;
  gradient: string;
  minPercent?: number;
  maxPercent?: number;
};

const options: StyledOptions = {
  shouldForwardProp: (prop) =>
    !["fieldSate", "gradient", "minPercent", "maxPercent"].includes(prop),
};

function exists(value: unknown) {
  return value !== undefined && value !== null && value !== "";
}

function mustHideThumb(fieldState: ControllerFieldState, value: unknown) {
  if (fieldState.invalid) {
    return true;
  }
  if (!fieldState.isDirty && !exists(value)) {
    return true;
  }
  return false;
}

export const StyledSlider = styled(Slider, options)`
  margin-bottom: 60px;

  & .MuiSlider-thumb {
    display: ${({ fieldSate, value }: ComposedSliderProps) =>
      mustHideThumb(fieldSate, value) ? "none" : "flex"};

    width: 10px;
    height: 11px;
    top: calc(50% - 8px);
    border-radius: 1px 1px 0 0;
    background-color: #5f3196;

    &:focus,
    &:hover,
    &.Mui-active,
    &.Mui-focusVisible {
      box-shadow: inherit;
    }

    &:before {
      border-radius: 0;
      top: 11px;
      border: 5px solid transparent;
      border-top-color: #5f3196;
      width: 0;
      left: 0;
      box-sizing: border-box;
      box-shadow: none;
    }

    &:after {
      border-radius: 0;
      width: 1px;
      height: 19px;
      top: 100%;
      background-color: #5f3196;
    }
  }

  & .MuiSlider-markLabel {
    background-color: #fff;
    color: #4a454e;

    &[data-index="0"] {
      transform: none;
    }

    &[data-index="${({ marks }) => Array.isArray(marks) && marks.length - 1}"] {
      transform: translateX(-100%);
    }
  }

  & .MuiSlider-valueLabelOpen {
    transform: none;
    line-height: normal;
    background-color: #fff;
    color: #5f3196;
    padding: 0;
    top: 30px;

    &:before {
      display: none;
    }
  }

  & .MuiSlider-rail {
    background: linear-gradient(${({ gradient }) => gradient});

    ${({ minPercent, maxPercent }) =>
      minPercent &&
      maxPercent &&
      css`
        &:before {
          content: "";
          position: absolute;
          border: 1px solid black;
          width: calc(${maxPercent}% - ${minPercent}%);
          height: 50px;
          left: ${minPercent}%;
          border-top-color: transparent;
          border-radius: 0 0 4px 4px;
          box-sizing: border-box;
          top: -10px;
        }

        &:after {
          content: "Recommended";
          position: absolute;
          width: calc(${maxPercent}% - ${minPercent}%);
          height: 50px;
          left: ${minPercent}%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          top: 30px;
          color: #4a454e;
        }
      `}
  }

  & .MuiSlider-mark {
    display: none;
  }
` as React.FC<ComposedSliderProps>;
