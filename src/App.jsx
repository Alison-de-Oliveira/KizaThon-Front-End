import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";

{
  /*Páginas*/
}
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import CategoryFilter from "./Pages/CategoryFilter";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:filter" element={<CategoryFilter />} />
      </Routes>
    </Router>
  );
}

export default App;
