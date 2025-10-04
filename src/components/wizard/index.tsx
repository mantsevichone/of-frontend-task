import { useId, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { add as addVirtualMachine } from "@/store/vmListSlice";
import { Sidebar } from "./components/sidebar";
import { Form } from "./components/form";
import { Summary } from "./components/summary";
import { ConfirmationDialog } from "./components/confirmation";
import { exists } from "@/utils";
import type { VirtualMachine } from "@/types";
import type { QuestionType } from "./types";
import { FormDescription, BackButton } from "../sharedStyles";
import {
  Container,
  Header,
  Heading,
  Body,
  FormContainer,
  FormTitle,
} from "./styles";
import JOURNEY from "./journey.json";

interface Props {
  onClose: () => void;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

// TODO: error icon on error input state

export function CreationDialog({ onClose }: Props) {
  const vmId = useId();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [activeSectionIndex, setActiveSection] = useState(0);
  const [creationData, setCreationData] = useState<
    Record<string, string | number | boolean>
  >({});

  const goNext = () => {
    setActiveSection((currentIndex) =>
      currentIndex === JOURNEY.length - 1 ? currentIndex : currentIndex + 1
    );
  };

  const goBack = () => {
    setActiveSection((currentIndex) =>
      currentIndex === 0 ? currentIndex : currentIndex - 1
    );
  };

  const handleSubmit = (data: object) => {
    setCreationData((prev) => ({ ...prev, ...data }));
    goNext();
  };

  const handleCreate = () => {
    const { cpu, memory, name } = creationData;
    const newVM: VirtualMachine = {
      id: `${vmId} ${name}`,
      state: true,
      hostServer: "43C07-27",
      cpuValue: getRandomInt(Number(cpu)),
      cpu: Number(cpu),
      memoryValue: getRandomInt(Number(memory)),
      memory: Number(memory),
      memoryUnit: "GiB",
      createdAt: new Date().toISOString(),
      alerts: { critical: 0, important: 0, moderate: 0 },
    };

    dispatch(addVirtualMachine(newVM));

    onClose();
  };

  const handleEdit = () => {
    setActiveSection(0);
  };

  const handleClose = () => {
    if (Object.keys(creationData).length > 0) {
      setOpen(true);
    } else {
      onClose();
    }
  };

  const journey = useMemo(() => {
    return JOURNEY.map((section) => {
      return {
        ...section,
        complete:
          section.name === "summary" ||
          section.questions.every((question) =>
            exists(creationData?.[question.path])
          ),
      };
    });
  }, [activeSectionIndex]);

  const activeSection = journey[activeSectionIndex];
  const questionsWithAnswers: QuestionType[] = activeSection.questions.map(
    (question) => ({
      ...question,
      answer: creationData?.[question.path],
    })
  );
  const summaryAnswers =
    activeSection.answers?.map((answer) => ({
      label: answer.label,
      value: answer.units
        ? `${creationData[answer.path]} ${answer.units}`
        : creationData[answer.path],
    })) || [];

  return (
    <Modal open onClose={handleClose}>
      <Container>
        <Header>
          <Heading>New virtual machine</Heading>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Header>
        <Body>
          <Sidebar journey={journey} activeSectionIndex={activeSectionIndex} />
          <FormContainer>
            <FormTitle>{activeSection.title}</FormTitle>
            <FormDescription>{activeSection.description}</FormDescription>

            {activeSection.name === "summary" ? (
              <Summary
                answers={summaryAnswers}
                handleCreate={handleCreate}
                handleEdit={handleEdit}
                backButton={
                  <BackButton variant="text" onClick={goBack}>
                    Back
                  </BackButton>
                }
              />
            ) : (
              <Form
                key={activeSection.name}
                questions={questionsWithAnswers}
                onSubmit={handleSubmit}
                isComplete={activeSection.complete}
                backButton={
                  activeSectionIndex > 0 ? (
                    <BackButton variant="text" onClick={goBack}>
                      Back
                    </BackButton>
                  ) : undefined
                }
              />
            )}
          </FormContainer>
        </Body>
        <ConfirmationDialog
          isOpen={open}
          title="Cancel creating?"
          description="You have unsaved changes that will be lost. Do you want to continue?"
          confirmText="Leave"
          cancelText="Cancel"
          onConfirm={onClose}
          onCancel={() => setOpen(false)}
        />
      </Container>
    </Modal>
  );
}
