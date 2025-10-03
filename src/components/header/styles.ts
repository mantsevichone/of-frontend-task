import styled from "@emotion/styled";
import { NavLink } from "react-router";
import Badge from "@mui/material/Badge";
import { css } from "@emotion/react";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 71px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  max-width: 1280px;
  width: 100%;
  background-color: #fff;
`;

export const LogoWrapper = styled.div`
  width: 80px;
  height: 26px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const headerCTA = css`
  color: #495057;
  text-decoration: none;
  padding: 8px 16px;
  font-size: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  ${headerCTA}

  &.active {
    font-weight: 700;
    color: #212529;
    border-bottom: 1.5px solid #212529;
  }
`;

export const HelpCTA = styled.span`
  ${headerCTA}
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
`;

export const HelpMessage = styled.span`
  display: inline-block;
  padding: 16px;
  font-size: 40px;
`;

export const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    right: 6px;
    top: 6px;
    border: 2px solid #fff;
    background: #5f3196;
    box-sizing: content-box;
    border-radius: 100%;
  }
`;
