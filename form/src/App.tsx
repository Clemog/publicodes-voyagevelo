import { Route, Routes } from 'react-router-dom'
import Simulation from './components/Simulation'


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Simulation />} />
      </Routes>
    </div>
  )
}
