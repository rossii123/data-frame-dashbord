import treeJson from '../data/tree';
import { FiDatabase } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { SelectedItemContext } from '../context';

const FolderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-5 h-5 mr-2 stroke-current"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    ></path>
  </svg>
);

type CategoryNode = {
  name: string;
  type: 'Catalog';
  description: string | null;
  children?: Node[];
};
export type DatasetNode = {
  name: string;
  type: 'Dataset';
  id: string | null;
  description: string;
  columns: Column[];
};
export type Column = {
  name: string;
  data_type: string;
  description: string;
  from_store: boolean;
};
type Node = DatasetNode | CategoryNode;

export const Item = ({ item }: { item: Node }) => {
  const [open, setOpen] = useState(false);
  const { selected, setSelected } = useContext(SelectedItemContext);
  if (item.type === 'Catalog') {
    return (
      <li>
        <a onClick={() => setOpen(!open)}>
          <FolderIcon /> {item.name}{' '}
        </a>
        <motion.div
          animate={{ height: open ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          {item.children && (
            <ul className="menu">
              {' '}
              {item.children.map((i, index) => (
                <Item item={i} key={index} />
              ))}
            </ul>
          )}
        </motion.div>
      </li>
    );
  }
  return (
    <li>
      <a onClick={() => setSelected(item)}>
        <FiDatabase className="text-2xl mr-2" /> {item.name}
      </a>
    </li>
  );
};

export const TreeList = () => {
  const list = treeJson as Node[];
  return (
    <ul className="menu pt-4">
      {list.map((l, index) => (
        <Item item={l} key={index} />
      ))}
    </ul>
  );
};
