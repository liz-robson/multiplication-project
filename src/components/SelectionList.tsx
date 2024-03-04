import SelectionBox from "./SelectionBox";

export default function SelectionList(props) {

    const objects = props.tableList;

  return (
    <>
    {objects.map((table) => {
        return <SelectionBox table={table}/>;
    })}
    </>
  );
}