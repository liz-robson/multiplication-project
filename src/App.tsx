import { useState } from 'react'
import './index.css'
import './App.css'
import Table from './components/Table'
import TablesList from './TablesList.json'
import SelectionList from './components/SelectionList'

function App() {
  const [tables, setTables] = useState(TablesList)
  const [selectedId, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id === selectedId ? null : id);
    console.log(id, selectedId);
  }

  return (
    <>
    <SelectionList tableList={tables} selectedId={selectedId} handleSelect={handleSelect}/>
    <Table id={selectedId}/>
    {/* <Table tableList={tables} selectedId={selectedId}/> */}
{/* <Table />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
