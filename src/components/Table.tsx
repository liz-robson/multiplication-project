import React from "react";

export default function Table(props) { 

 
 return (
    <div>
      <h1>This is my dynamic table</h1>
      <h2>{props.id}</h2>
    </div>
  );
}

// //   console.log(props);

// //   let column = 0;
// //   let row = 0;

// //   if (props.selectedId === props.table.id) {
// //     column = props.table.tableWidth;
// //     row = props.table.tableHeight;
// //   }

// //   const [cellValues, setCellValues] = useState(() => {

// //     return Array(column).fill().map(() => Array(row).fill('')); 
// //   });

// //   return (
// //     <div className="container mx-auto">
// //       <table className="table-auto border border-collapse">
// //         <tbody>
// //           {cellValues.map((row, rowIndex) => (
// //             <tr key={rowIndex}>
// //               {row.map((cell, colIndex) => (
// //                 <td key={`${rowIndex}-${colIndex}`} className="border p-2">
// //                   <input
// //                     type="text"
// //                     value={cell}
// //                     onChange={(event) => handleCellValueChange(rowIndex, colIndex, event)}
// //                     className="w-full outline-none"
// //                   />
// //                 </td>
// //               ))}
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

//  // // Handle cell value changes
//   // const handleCellValueChange = (rowIndex, colIndex, event) => {
//   //   const newValue = event.target.value;
//   //   const updatedCellValues = [...cellValues];
//   //   updatedCellValues[rowIndex][colIndex] = newValue;
//   //   setCellValues(updatedCellValues);
