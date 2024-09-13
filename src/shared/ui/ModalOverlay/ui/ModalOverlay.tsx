
  import classes from './styles.module.scss';
  import { ModalOverlayProps } from './types';

  export const ModalOverlay = ({
    isOpened,
    toggleModal,
    children
  }: ModalOverlayProps) => {
        
    if(!isOpened) return null;
    return (
      <div className={classes["container"]}>
        <div
          className={classes["overlay"]}
          role="button"
          tabIndex={0}
          aria-hidden="true"
          onClick={toggleModal}
        />
          {children}
      </div>
    );
  };