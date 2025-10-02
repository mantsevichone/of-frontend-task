import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";

import { CreationDialog } from "../components/wizard";

const StyledButton = styled(Button)`
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: none;
  text-transform: none;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  background-color: #5f3196;
`;

export function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Dashboard</h1>
      <StyledButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        New
      </StyledButton>
      {open && <CreationDialog onClose={() => setOpen(false)} />}
    </>
  );
}
