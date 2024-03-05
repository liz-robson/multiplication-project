import SelectionBox from "./SelectionBox";

export default function SelectionList(props) {

  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id === selected ? null : id);
  }

    const objects = props.tableList;

  return (
    <div className="grid grid-cols-3 gap-6">
    {objects.map((table, index) => {
        return <SelectionBox table={table} key={index} onSelect={handleSelect} selected={selected}/>;
    })}
    </div>
  );
}