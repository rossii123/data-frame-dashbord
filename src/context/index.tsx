import { createContext, ReactNode, useState } from 'react';
import { DatasetNode } from '../components/tree-list';

type SelectedItemContextParams = {
  selected: DatasetNode | null;
  setSelected: (val: DatasetNode | null) => void;
};
export const SelectedItemContext = createContext<SelectedItemContextParams>({
  selected: null,
  setSelected: () => {},
});

export const SelectedItemContextWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selected, setSelected] = useState<DatasetNode | null>(null);
  return (
    <SelectedItemContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedItemContext.Provider>
  );
};
