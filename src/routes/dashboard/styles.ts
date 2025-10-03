import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 40px 40px;
  box-sizing: border-box;
  max-width: 1280px;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: none;
  text-transform: none;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  background-color: #5f3196;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 20px;
`;

export const Counter = styled.span`
  margin: 8px;
  padding: 4px 6px;
  border-radius: 100px;
  background: #fff;
  color: #5f3196;
  font-size: 14px;
  font-weight: 700;
`;