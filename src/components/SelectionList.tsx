import SelectionBox from "./SelectionBox";

export default function SelectionList(props) {

    const objects = props.tableList;

  return (
    <>
    <div className="grid grid-cols-3 gap-6">
    {objects.map((table, index) => {
        return <SelectionBox table={table} key={index} onSelect={props.handleSelect} selectedId={props.selectedId}/>;
    })}
    </div>
    </>
  );
}