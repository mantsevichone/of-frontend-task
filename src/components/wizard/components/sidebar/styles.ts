import styled from "@emotion/styled";

import { BodyTitle, Divider } from "@/components/sharedStyles";
import ilustration from '@/assets/illustration_png.png';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: url(${ilustration}) #5f3196;
  border-radius: 0 0 0 8px;
  min-width: 244px;
  width: 244px;
  height: 568px;
  padding: 32px 24px;
`;

export const ThickDivider = styled(Divider)`
  margin: 24px 0;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  color: #e9e0eb;
`;

export const ActiveSection = styled(BodyTitle)`
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.1px;
`;
