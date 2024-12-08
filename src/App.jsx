import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home"
import Docs from "./pages/Docs"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/docs" element={<Docs />}/>
      </Routes>
    </>
  )
}

export default App