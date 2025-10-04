import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  ActionsWrapper,
  LogoWrapper,
  Nav,
  Wrapper,
  StyledNavLink,
  Container,
  StyledBadge,
  HelpCTA,
  HelpMessage,
} from "./styles";

import Logo from "@/assets/logo.svg";
import Image from "@/assets/avatar.jpg";

export function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <img src={Logo} />
        </LogoWrapper>
        <Nav>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
          <StyledNavLink to="/events">Events</StyledNavLink>
          <HelpCTA onClick={handleClick}>
            Help
            <ExpandMoreIcon sx={{ color: '#212529', fontSize: 16 }} />
          </HelpCTA>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <HelpMessage>👀</HelpMessage>
          </Popover>
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
