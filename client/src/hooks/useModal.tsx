import { createContext, useContext, useState } from 'react';

interface ModalContextI {
  isOpen: boolean;
  handleOpen: () => void;
}

const ModalContext = createContext<ModalContextI>(null!);

export const ModalProvider = ({ children }: any) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        handleOpen
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
