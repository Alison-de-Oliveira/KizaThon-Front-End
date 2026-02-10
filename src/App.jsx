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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
