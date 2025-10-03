import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import {
  ActionsWrapper,
  LogoWrapper,
  Nav,
  Wrapper,
  StyledNavLink,
  Container,
  StyledBadge,
} from "./styles";

import Logo from "../../assets/logo.svg";
import Image from "../../assets/avatar.jpg";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <img src={Logo} />
        </LogoWrapper>
        <Nav>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
          <StyledNavLink to="/events">Events</StyledNavLink>
        </Nav>
        <ActionsWrapper>
          <StyledBadge color="secondary" variant="dot">
            <NotificationsIcon
              sx={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
          </StyledBadge>
          <Avatar
            sx={{ width: "32px", height: "32px" }}
            alt="User avatar"
            src={Image}
          />
        </ActionsWrapper>
      </Wrapper>
    </Container>
  );
}
