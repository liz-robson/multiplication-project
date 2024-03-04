import React, { useState } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

type Props = {}

export default function SelectionBox({}: Props) {
  
  const [isChecked, setIsChecked] = useState(false);
   
  const handleClick = () => {
    setIsChecked(!isChecked);
  }


  return (
    <>
      <div className="bg-blue-200 rounded-lg p-4 w-1/3 h-96">
        {isChecked ? <ImCheckboxChecked onClick={handleClick} /> : <ImCheckboxUnchecked onClick={handleClick} />}
      </div>
    </>
  );
  
}