import { useContext } from 'react';
import { SelectedItemContext } from '../context';

export const ItemView = () => {
  const { selected } = useContext(SelectedItemContext);
  if (!selected) {
    return null;
  }
  return (
    <div className="p-4 md:p-10  bg-base-200 min-h-screen">
      <div className="card lg:card-side card-bordered bg-base-100 ">
        <div className="card-body">
          <h2 className="card-title">{selected.name}</h2>
          <p>{selected.description}</p>
          <div className="overflow-x-auto mt-6">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>from_store</th>
                  <th>name</th>
                  <th>data_type</th>
                  <th>description</th>
                </tr>
              </thead>
              <tbody>
                {selected?.columns.map((p, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{p.from_store ? 'Yes' : 'No'}</td>
                    <td>{p.name}</td>
                    <td>{p.data_type}</td>
                    <td>{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
