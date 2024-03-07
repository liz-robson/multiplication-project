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
    <Table id={selectedId} tables={tables} />
</>
  )
}

export default App
