import { ReactNode } from 'react';

export interface ModalOverlayProps {
  children: ReactNode;
  isOpened: boolean;
  toggleModal: () => void;
}