import { createContext, useContext, useState, ReactNode } from 'react';

interface ManufacturingContextType {
  hasManufacturing: boolean;
  activate: () => void;
  deactivate: () => void;
}

const ManufacturingContext = createContext<ManufacturingContextType>({
  hasManufacturing: false,
  activate: () => {},
  deactivate: () => {},
});

export function ManufacturingProvider({ children }: { children: ReactNode }) {
  const [hasManufacturing, setHasManufacturing] = useState(false);

  return (
    <ManufacturingContext.Provider value={{
      hasManufacturing,
      activate: () => setHasManufacturing(true),
      deactivate: () => setHasManufacturing(false),
    }}>
      {children}
    </ManufacturingContext.Provider>
  );
}

export function useManufacturing() {
  return useContext(ManufacturingContext);
}
