import SelectionBox from "./SelectionBox";
import { useState } from 'react';
import Table from './Table';

export default function SelectionList(props) {

  const [selectedId, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id === selectedId ? null : id);
  }

    const objects = props.tableList;

  return (
    <>
    <div className="grid grid-cols-3 gap-6">
    {objects.map((table, index) => {
        return <SelectionBox table={table} key={index} onSelect={handleSelect} selectedId={selectedId}/>;
    })}
    </div>
    <Table tables={objects}/>
    </>
  );
}