import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext<Element | undefined | null>(undefined);

interface ModalProviderProps {
  children: React.ReactNode
}

interface ModalProps {
  children: React.ReactNode,
  onClose: Function
}

export function ModalProvider({ children }: ModalProviderProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<HTMLDivElement | undefined | null>(undefined);

  useEffect(() => {
    setValue(modalRef.current);
  }, []);
  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }: ModalProps) {
  const modalNode = useContext(ModalContext);
  const handleEsc = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  if (!modalNode) return null;
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" aria-label="Close" role="button" onClick={() => onClose()} tabIndex={0} onKeyPress={handleEsc} />
      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode,
  );
}
