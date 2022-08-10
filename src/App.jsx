import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./components/Books/Books";
import { history } from "./History";
import Book from "./components/Book/Book";
import Login from "./components/Auth/Login";
import MatureBonds from "./components/matureBonds";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      return true;
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
      return false;
    }
  }

  const Logout = details => {
    console.log("Logout");
  }

  return ( 
    <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login handleLogin={handleLogin} error={error}/>} />
          <Route exact path="/books" element={<Books />} />
          <Route excat path="/matureBonds" element={<MatureBonds />} />
          <Route exact path="/book" element={<Book/>} />
        </Routes>
    </Router>
  )
};

export default App;
