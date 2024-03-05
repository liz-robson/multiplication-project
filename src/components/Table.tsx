import React from 'react';

interface TableProps {
  Table: { tableHeight: number, tableWidth: number }[];
}

const Table: React.FC<TableProps> = ({ tables }) => {

    return (
      <table>
        <tbody>
          {tables.map((table, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(tables.tableWidth)].map((_, cellIndex) => (
                <td key={cellIndex}>Cell</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default Table;
            

  //   <div className="bg-gray-100 p-4">
  // <div className="container mx-auto">
  //   <div className="grid grid-cols-12 gap-4">
  //     <div className="bg-gray-300 p-4">1</div>
  //     <div className="bg-gray-300 p-4">2</div>
  //     <div className="bg-gray-300 p-4">3</div>
  //     <div className="bg-gray-300 p-4">4</div>
  //     <div className="bg-gray-300 p-4">5</div>
  //     <div className="bg-gray-300 p-4">6</div>
  //     <div className="bg-gray-300 p-4">1</div>
  //     <div className="bg-gray-300 p-4">2</div>
  //     <div className="bg-gray-300 p-4">3</div>
  //     <div className="bg-gray-300 p-4">4</div>
  //     <div className="bg-gray-300 p-4">5</div>
  //     <div className="bg-gray-300 p-4">6</div>
  //   </div>
  // </div>