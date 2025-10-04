import { useController, type Control } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";

import type { QuestionType } from "@/components/wizard/types";
import { StyledFormControlLabel } from "./styles";
import { Slider } from "./components/slider";
import { NumberQuestion } from "./components/number";
import { TextQuestion } from "./components/text";

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

  switch (type) {
    case "number": {
      return (
        <NumberQuestion
          label={label}
          value={value}
          onChange={onChange}
          helperText={error ? error.message : helperText}
          error={!!error}
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
        <TextQuestion
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
