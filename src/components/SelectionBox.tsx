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
      <div className="bg-blue-200 rounded-lg p-4 w-1/3 h-96 flex items-center justify-center">
        <div><h1  className="mb-4">9 x 3</h1></div>
        {isChecked ? <ImCheckboxChecked  className="w-8 h-8 column" onClick={handleClick} /> : <ImCheckboxUnchecked  className="w-8 h-8 column" onClick={handleClick} />}
      </div>
    </>
  );
  
}