import { useMemo } from "react";
import type { ControllerFieldState } from "react-hook-form";

import { StyledSlider } from "./styles";

interface Props {
  value: number;
  onChange: () => void;
  max: number;
  units?: string;
  fieldState: ControllerFieldState;
}

export function Slider({ value, onChange, max, units = '', fieldState }: Props) {
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

  const minRecommendedValue = marks.find((mark) => mark.recommendedMin)?.value;
  const minPercent = minRecommendedValue
    ? Math.round((minRecommendedValue / max) * 100)
    : undefined;

  const maxRecommendedValue = marks.find((mark) => mark.recommendedMax)?.value;
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
