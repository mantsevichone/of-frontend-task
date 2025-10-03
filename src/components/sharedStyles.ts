import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const BodyTitle = styled.p`
  font-size: 14px;
  color: #e9e0eb;
  letter-spacing: 0.25px;
  line-height: 20px;
  margin: 0;
`;

export const FormDescription = styled(BodyTitle)`
  color: #4a454e;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0;
  color: #fff;
`;

export const BackButton = styled(Button)`
  border-radius: 100px;
  padding: 10px 12px;
  box-shadow: none;
  text-transform: none;
  color: #5f3196;
`;

export const NextButton = styled(Button)`
  border-radius: 100px;
  padding: 10px 24px;
  box-shadow: none;
  text-transform: none;
  background: #5F3196;

  &:disabled {
    background: #1d1b201e;
  }
`;

export const Divider = styled.hr`
  margin: 12px 0;
  background: #ccc4ce4c;
  border: none;
  height: 1px;
  width: 100%;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 16px;
`;
