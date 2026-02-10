import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./Layout/NavBar";

{
  /*Páginas*/
}
import Home from "./Pages/Home";
import Category from "./Pages/Category";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:filter" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
