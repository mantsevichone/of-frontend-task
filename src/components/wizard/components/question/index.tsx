import { useMemo, type ChangeEvent } from "react";
import { useController, type Control } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";

import {
  StyledTextField,
  StyledSlider,
  StyledFormControlLabel,
} from "./styles.ts";

interface Props {
  question: {
    id: string;
    type: string;
    path: string;
    validations?: object;
    label?: string;
    helperText?: string;
    max?: number;
    units?: string;
  };
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
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, "");

        const formattedValue =
          numericValue.startsWith("0") && numericValue.length > 1
            ? numericValue.slice(1)
            : numericValue;

        onChange(formattedValue);
      };
      return (
        <StyledTextField
          label={label}
          value={value}
          onChange={handleChange}
          helperText={error ? error.message : helperText}
          error={!!error}
          inputMode="numeric"
        />
      );
    }
    case "slider": {
      const marks = [
        {
          value: 0,
          label: "0 GB",
        },
        {
          value: 16,
          label: "16 GB",
          recommendedMin: true,
        },
        {
          value: 32,
          label: "32 GB",
          recommendedMax: true,
        },
        {
          value: 50,
          label: "50 GB",
        },
      ];

      const colors = ["#F6EEF6", "#3AC140", "#F4DE19", "red"];

      const gradient = useMemo(
        () =>
          marks.reduce((acc, mark, index) => {
            if (index === 0) {
              return acc + colors[index];
            }
            const percentage = Math.round((mark.value / max) * 100);

            return `${acc} ${percentage}%, ${colors[index]} ${percentage}%`;
          }, "to right,"),
        [marks.length]
      );

      const minRecommendedValue = marks.find(
        (mark) => mark.recommendedMin
      )?.value;
      const minPercent = minRecommendedValue
        ? Math.round((minRecommendedValue / max) * 100)
        : undefined;

      const maxRecommendedValue = marks.find(
        (mark) => mark.recommendedMax
      )?.value;
      const maxPercent = maxRecommendedValue
        ? Math.round((maxRecommendedValue / max) * 100)
        : undefined;

      function getValueText(value: number) {
        return `${value} ${units}`;
      }

      return (
        <StyledSlider
          value={value}
          onChange={onChange}
          max={max}
          valueLabelDisplay="on"
          valueLabelFormat={getValueText}
          getAriaValueText={getValueText}
          track={false}
          marks={marks}
          fieldSate={fieldState}
          gradient={gradient}
          minPercent={minPercent}
          maxPercent={maxPercent}
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
