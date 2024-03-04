import "./App.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { fontStyles } from "./Styles"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact/Contact"

function App() {
  return (
    <div style={fontStyles}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
