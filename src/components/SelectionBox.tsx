// import { useState } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export default function SelectionBox(props: Props) {
  
  const handleClick = () => {
    props.onSelect(props.table.id)
  }

  return (
    <>
      <div className="bg-emerald-700 hover:bg-emerald-500 rounded-lg h-96 relative flex flex-col items-center justify-center w-auto">
        <div>
          <h1  className="mb-4 text-5xl">{props.table.tableWidth} x {props.table.tableHeight}</h1>
          <p className="mb-16 text-2xl">Complete {props.table.sumNumber} sums</p>
        </div>
        {props.selectedId === props.table.id ? 
        <ImCheckboxChecked  className="w-8 h-8" onClick={handleClick} /> : 
        <ImCheckboxUnchecked  className="w-8 h-8" onClick={handleClick} />
        }
        <p className="mb-4 text-2xl absolute bottom-0 right-5">5 mins</p>
        </div>
    </>
  );
  
}