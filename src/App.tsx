import { useState } from 'react'
import './index.css'
import './App.css'
import Table from '../src/components/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Table />
      <div className="grid-rows-[1-6] bg-grey border-colour">Test
      </div>
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
      </p>
    </>
  )
}

export default App
