import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  height: 100%;
`;

export const ActionBlock = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 16px;
`;

export const AnswerBoard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background: #fff7ff;
`;

export const Answer = styled.p`
  display: flex;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;

  & span:first-of-type {
    color: #4a454e;
    display: inline-block;
    min-width: 80px;
  }

  & span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const EditButton = styled(IconButton)`
  align-self: flex-end;
  color: #5f3196;
`;
