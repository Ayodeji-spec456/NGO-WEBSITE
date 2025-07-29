import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./blogpages/Blog";
import BlogView from "./blogpages/BlogView";
import AboutUs from "./component/AboutUs";
import Events from "./component/events/Events";


function App() {
  return (
    <div>
      <AboutUs />
      <Events />

      <BrowserRouter>
        <Routes>
          <Route path="/event" element={<Events />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogView/:encodedUrl" element={<BlogView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}


export default App;
