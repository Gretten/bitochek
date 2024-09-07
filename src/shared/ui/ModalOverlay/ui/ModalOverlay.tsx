import {
    ReactPortal, useEffect, useState,
  } from 'react';
  import { createPortal } from 'react-dom';
  import classes from './style.module.scss';
  import { ModalOverlayProps } from './types';

  export const ModalOverlay = ({
    children, onClose, isOpened,
  }: ModalOverlayProps): ReactPortal | null => {
    const [container] = useState(() => document.createElement('div'));
  
    useEffect(() => {
      document.body.appendChild(container);
  
      return () => {
        document.body.removeChild(container);
      };
    }, []);
  
    if (!isOpened) return null;
  
    return createPortal(
      <div className={classes["container"]}>
        <div
          className={classes["overlay"]}
          role="button"
          tabIndex={0}
          onClick={onClose}
          aria-hidden="true"
        />
        {children}
      </div>,
      container,
    );
  };