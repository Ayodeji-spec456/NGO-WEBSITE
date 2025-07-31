
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Page/Navbar';
// import About from "./component/AboutUs";
import Contact from './Page/Contact';
import Home from './Page/Home';
import AboutUs from './component/AboutUs';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
