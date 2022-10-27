import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Address from './pages/Address'
import Main from './pages/Main'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="address" element={<Address />} />
      </Route>
    </Routes>
  )
}

export default App
