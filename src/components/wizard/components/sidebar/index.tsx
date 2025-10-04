import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Wrapper,
  ThickDivider,
  Section,
  ActiveSection,
} from "./styles.ts";
import { Title, BodyTitle } from "@/components/sharedStyles";

interface Props {
  journey: Array<{ name: string; complete: boolean }>;
  activeSectionIndex: number;
}

export function Sidebar({ journey, activeSectionIndex }: Props) {
  return (
    <Wrapper>
      <BodyTitle>Welcome to the</BodyTitle>
      <Title>New Virtual Machine Wizard</Title>
      <ThickDivider />
      {journey.map(
        (section, index) =>
          section.name !== "summary" && (
            <Section key={section.name}>
              {section.complete && <CheckIcon sx={{ fontSize: 16 }} />}
              {index === activeSectionIndex ? (
                <>
                  {!section.complete && <RemoveIcon sx={{ fontSize: 16 }} />}
                  <ActiveSection>{section.name}</ActiveSection>
                </>
              ) : (
                <BodyTitle>{section.name}</BodyTitle>
              )}
            </Section>
          )
      )}
    </Wrapper>
  );
}
