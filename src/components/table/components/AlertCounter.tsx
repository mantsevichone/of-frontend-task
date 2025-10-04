import WarningIcon from "@mui/icons-material/Warning";
import styled from "@emotion/styled";
import type { SvgIconComponent } from "@mui/icons-material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  strong + span {
    margin-left: 4px;
  }
`;

interface Props {
  color: string;
  amount?: number;
  label: string;
  IconComponent?: SvgIconComponent;
}

export function AlertCounter({
  color,
  amount = 0,
  label,
  IconComponent = WarningIcon,
}: Props) {
  return (
    <Container>
      <IconComponent sx={{ fontSize: 19, color }} />
      <div>
        {amount > 0 && <strong>{amount}</strong>}
        <span>{label}</span>
      </div>
    </Container>
  );
}
