import React, {useContext, useState} from 'react';
import {createContext} from 'react';

interface ModalContextData {
    visibility: boolean;
    setModalVisibility(boolean: boolean): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

function useModal() {
  const context = useContext(ModalContext);

  return context;
}


export const ModalProvider = ({children}) => {
    const [visibility, setVisibility] = useState(false);
        
    function setModalVisibility(boolean: boolean) {
        setVisibility(() => boolean);
    }

  return (
    <ModalContext.Provider
      value={{setModalVisibility, visibility}}>
      {children}
    </ModalContext.Provider>
  );
};

export default useModal;
