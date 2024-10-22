
import {
  ModalWrapper,
  ModalContent,
  Text,
  ButtonWrapper,
  StyledButton,
} from './PopuipModalStyles';

export default function PopupModal({ onClose, onConfirm }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <Text>Sicher, dass du alle Daten löschen möchtest?</Text>
        <ButtonWrapper>
          <StyledButton onClick={onConfirm} primary>
            Ja, löschen
          </StyledButton>
          <StyledButton onClick={onClose}>Abbrechen</StyledButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
}
