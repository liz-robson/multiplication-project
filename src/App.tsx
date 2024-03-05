import { useState } from 'react'
import './index.css'
import './App.css'
import Table from '../src/components/Table'
import TablesList from './TablesList.json'
import SelectionList from './components/SelectionList'

function App() {
  const [count, setCount] = useState(0)
  const [tables, setTables] = useState(TablesList)

  return (
    <>
    <SelectionList tableList={tables} />
    {/* <Table tableList={tables}/> */}
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
