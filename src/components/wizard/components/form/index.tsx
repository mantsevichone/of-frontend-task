import { useEffect, type ReactElement } from "react";
import { useForm } from "react-hook-form";

import { Question } from "../question";
import { NextButton } from "../../../sharedStyles";
import { FormElement, ActionBlock } from "./styles";

function getDefaultValue(type: string) {
  switch (type) {
    case "checkbox": {
      return false;
    }
    case "number":
    case "slider":
    case "text":
    default: {
      return "";
    }
  }
}

interface Props {
  questions: Array<{
    id: string;
    type: string;
    path: string;
    answer: string | number | boolean;
  }>;
  onSubmit: (data: object) => void;
  isComplete: boolean;
  backButton?: ReactElement;
}

export function Form({ questions, onSubmit, isComplete, backButton }: Props) {
  const defaultValues = questions.reduce((acc, question) => {
    return {
      ...acc,
      [question.path]: question.answer ?? getDefaultValue(question.type),
    };
  }, {});

  const {
    control,
    handleSubmit,
    formState: { isValid },
    trigger,
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (isComplete) {
      trigger();
    }
  }, [isComplete]);

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      {questions.map((question) => (
        <Question key={question.id} question={question} control={control} />
      ))}
      <ActionBlock>
        {backButton}
        <NextButton variant="contained" type="submit" disabled={!isValid}>
          Next
        </NextButton>
      </ActionBlock>
    </FormElement>
  );
}
