import React from "react";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Pets } from "./components/pets/Pets";
import { history } from "./History";
import Dummy from "./components/Dummy/dummy";
import Login from "./components/Auth/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes} from 'react-router-dom';
const App = () => {
  return (
  // return <Pets/>
  <Router history={history}>
         <Routes>
           <Route exact path="/" element={<Pets />} />
           <Route exact path="/login" element={<Login/>} />
            {/* specific details page */}
            <Route exact path="/show" element={<Dummy/>} />
         </Routes>
     </Router>
  )
 
};

export default App;
