import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import virtualMachinesData from "./data.json";
import { type VirtualMachine } from "../../types";
import {
  Layout,
  FlexContainer,
  Container,
  H1,
  Counter,
  StyledButton,
} from "./styles";
import { CreationDialog } from "../../components/wizard";
import { VMTable } from "../../components/table";
import { StateChart } from "../../components/state-chart";
import { TrendChart } from "../../components/trend-chart";

export function Dashboard() {
  const [open, setOpen] = useState(false);
  const vmList: VirtualMachine[] = virtualMachinesData;

  return (
    <Layout>
      <FlexContainer>
        <StateChart vmList={vmList} />
        <TrendChart />
      </FlexContainer>
      <Container>
        <H1>
          Virtual machines
          <Counter>{vmList.length}</Counter>
        </H1>
        <StyledButton
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          New
        </StyledButton>
      </Container>
      <VMTable vmList={vmList} />
      {open && <CreationDialog onClose={() => setOpen(false)} />}
    </Layout>
  );
}
