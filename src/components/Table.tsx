import React, { useState } from 'react';

const Table = () => {
  // Initialize state to manage cell values
  const [cellValues, setCellValues] = useState(Array(10).fill(Array(4).fill('')));

  // // Handle cell value changes
  // const handleCellValueChange = (rowIndex, colIndex, event) => {
  //   const newValue = event.target.value;
  //   const updatedCellValues = [...cellValues];
  //   updatedCellValues[rowIndex][colIndex] = newValue;
  //   setCellValues(updatedCellValues);
  // };

  return (
    <div className="container mx-auto">
      <table className="table-auto border border-collapse">
        <tbody>
          {cellValues.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} className="border p-2">
                  <input
                    type="text"
                    value={cell}
                    onChange={(event) => handleCellValueChange(rowIndex, colIndex, event)}
                    className="w-full outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
