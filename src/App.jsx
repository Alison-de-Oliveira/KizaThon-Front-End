import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';

import NavBar from './Components/Layout/NavBar';

{/*Páginas*/}
import Home from './Components/Pages/Home';
import Category from './Components/Pages/Categoty';


function App() {


  return (

    <Router>

        <NavBar/>

          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/category' element={<Category/>}/>
          </Routes>


    </Router>

  )
}

export default App
