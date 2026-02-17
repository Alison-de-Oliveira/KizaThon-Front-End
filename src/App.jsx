import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
{
  /*Páginas*/
}
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import CategoryFilter from "./Pages/CategoryFilter";
import FilterButtons from "./Components/FilterButtons";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<FilterButtons />}>
          <Route index element={<Category />} />
          <Route path=":filter" element={<CategoryFilter />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
