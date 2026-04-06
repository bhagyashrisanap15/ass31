import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Ourservice from "./views/Ourservice/Ourservice";
import Notfound from "./views/Notfound/Notfound";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ourservice" element={<Ourservice />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
);
