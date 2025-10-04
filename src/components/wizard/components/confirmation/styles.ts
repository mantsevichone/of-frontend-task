import styled from "@emotion/styled";

import { BackButton, NextButton } from "@/components/sharedStyles";

export const Confirmation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 312px;
  background-color: #ffecea;
  border-radius: 28px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const ConfirmationTitle = styled.h2`
  margin: 0;
  color: #1e1a20;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
`;

export const ConfirmationActionBlock = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 8px;
`;

export const ConfirmButton = styled(NextButton)`
  background: #ba1a1a;
`;

export const CancelButton = styled(BackButton)`
  color: #1e1a20;
`;
