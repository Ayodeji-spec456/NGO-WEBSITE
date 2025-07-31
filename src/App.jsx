import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./component/AboutUs";
import Events from "./component/events/Events";
import Navbar from './Page/Navbar';
import Contact from './Page/Contact';
import Home from './Page/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/events" element={<Events/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
