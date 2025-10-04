import { type ChangeEvent } from "react";
import { useController, type Control } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";

import type { QuestionType } from "../../types.ts";
import { StyledTextField, StyledFormControlLabel } from "./styles.ts";
import { Slider } from "./components/slider";

interface Props {
  question: QuestionType;
  control: Control;
}

export function Question({ control, question }: Props) {
  const {
    type,
    path,
    validations,
    label,
    helperText,
    max = 100,
    units,
  } = question;

  const {
    field: { value, onChange },
    fieldState: { error },
    fieldState,
  } = useController({
    name: path,
    control,
    rules: validations,
  });

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");

    const formattedValue =
      numericValue.startsWith("0") && numericValue.length > 1
        ? numericValue.slice(1)
        : numericValue;

    onChange(formattedValue);
  };

  switch (type) {
    case "number": {
      return (
        <StyledTextField
          label={label}
          value={value}
          onChange={handleNumberChange}
          helperText={error ? error.message : helperText}
          error={!!error}
          inputMode="numeric"
        />
      );
    }
    case "slider": {
      return (
        <Slider
          value={value}
          onChange={onChange}
          max={max}
          units={units}
          fieldState={fieldState}
        />
      );
    }
    case "checkbox": {
      return (
        <StyledFormControlLabel
          control={<Checkbox />}
          label={label}
          checked={value}
          onChange={onChange}
        />
      );
    }
    case "text":
    default: {
      return (
        <StyledTextField
          label={label}
          value={value}
          onChange={onChange}
          helperText={error ? error.message : helperText}
          error={!!error}
        />
      );
    }
  }
}
