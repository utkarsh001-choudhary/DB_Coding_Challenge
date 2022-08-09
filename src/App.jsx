import React, { useState } from "react";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Pets } from "./components/pets/Pets";
import Books from "./components/Books/Books";
import { history } from "./History";
import Book from "./components/Book/Book";
import Login from "./components/Auth/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes} from 'react-router-dom';
const App = () => {

  const adminUser = {
    email : "admin@db.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:" "});
  const [error, setError]= useState("");

  const handleLogin = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = details => {
    console.log("Logout");
  }

  return (
  // return <Pets/>
  <Router history={history}>
         <Routes>
           <Route exact path="/" element={<Books />} />
           <Route exact path="/login" element={<Login Login={handleLogin} error={error}/>} />
            {/* specific details page */}
            <Route exact path="/book" element={<Book/>} />
         </Routes>
     </Router>
  )
 
};

export default App;
