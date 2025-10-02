import styled from "@emotion/styled";

import { Title } from "../sharedStyles";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  width: 678px;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 4px 0 24px;
`;

export const Heading = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  color: #705289;
`;

export const Body = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 434px;
  padding: 32px;
`;

export const FormTitle = styled(Title)`
  color: #1e1a20;
  margin-bottom: 8px;
`;
