import { ReactNode } from 'react';

export interface ModalOverlayProps {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
}