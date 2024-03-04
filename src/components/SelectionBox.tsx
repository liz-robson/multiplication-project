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
      <div className="bg-blue-200 rounded-lg p-4 w-1/3 h-96 relative flex flex-col items-center justify-center">
        <div>
          <h1  className="mb-4 text-5xl">9 x 3</h1>
          <p className="mb-4 text-2xl">Answer 27 sums</p>
        </div>
        {isChecked ? <ImCheckboxChecked  className="w-8 h-8" onClick={handleClick} /> : <ImCheckboxUnchecked  className="w-8 h-8" onClick={handleClick} />}
        <p className="mb-4 text-2xl absolute bottom-0 right-5">5 mins</p>
        </div>
    </>
  );
  
}