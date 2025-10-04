import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";

import { FormDescription } from "@/components/sharedStyles";
import {
  Confirmation,
  ConfirmationTitle,
  ConfirmationActionBlock,
  ConfirmButton,
  CancelButton,
} from "./styles";

interface Props {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  cancelText: string;
  confirmText: string;
}

export function ConfirmationDialog({
  isOpen,
  onCancel,
  title,
  description,
  onConfirm,
}: Props) {
  return (
    <Modal open={isOpen} onClose={onCancel}>
      <Confirmation>
        <InfoIcon sx={{ color: "#BA1A1A" }} />
        <ConfirmationTitle>{title}</ConfirmationTitle>
        <FormDescription>{description}</FormDescription>
        <ConfirmationActionBlock>
          <ConfirmButton variant="contained" onClick={onConfirm}>
            Leave
          </ConfirmButton>
          <CancelButton variant="text" onClick={onCancel}>
            Cancel
          </CancelButton>
        </ConfirmationActionBlock>
      </Confirmation>
    </Modal>
  );
}
