import { Fragment, type ReactElement } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { NextButton, Divider } from "@/components/sharedStyles";
import {
  SummaryWrapper,
  AnswerBoard,
  Answer,
  EditButton,
  ActionBlock,
} from "./styles";

interface Props {
  answers: Array<{ label: string; value: string | number | boolean }>;
  handleCreate: () => void;
  backButton: ReactElement;
  handleEdit: () => void;
}

export function Summary({
  answers,
  handleCreate,
  backButton,
  handleEdit,
}: Props) {
  return (
    <SummaryWrapper>
      <AnswerBoard>
        {answers.map((answer, index) => {
          return (
            <Fragment key={index}>
              <Answer key={index}>
                <span>{answer.label}</span>
                <span>{answer.value}</span>
              </Answer>
              <Divider />
            </Fragment>
          );
        })}
        <EditButton onClick={handleEdit}>
          <EditOutlinedIcon />
        </EditButton>
      </AnswerBoard>
      <ActionBlock>
        {backButton}
        <NextButton variant="contained" onClick={handleCreate}>
          Create
        </NextButton>
      </ActionBlock>
    </SummaryWrapper>
  );
}
