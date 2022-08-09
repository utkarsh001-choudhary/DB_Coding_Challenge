import React from "react";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Pets } from "./components/pets/Pets";
import Books from "./components/Books/Books";
import { history } from "./History";
import Book from "./components/Book/Book";
import Login from "./components/Auth/Login";
import MatureBonds from "./components/matureBonds";
 import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes} from 'react-router-dom';
const App = () => {
  return (
  // return <Pets/>
  <Router history={history}>
         <Routes>
           <Route exact path="/" element={<Books />} />
           <Route exact path="/login" element={<Login/>} />
            {/* specific details page */}
            {/* <Route exact path="/show" element={<Dummy/>} /> */}
            <Route excat path="/matureBonds" element={<MatureBonds/>}></Route>
            <Route exact path="/book" element={<Book/>} />
         </Routes>
     </Router>
  )
};

export default App;
