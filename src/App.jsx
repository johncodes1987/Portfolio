import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import { Toaster } from './Components/ui/toaster'

function App() {

  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
