import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
function App() {
  const adminUser = {
    email : "admin@db.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:" "});
  const [error, setError]= useState("");

  const Login = details => {
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
    <div className="App">
      <LoginForm Login={Login} error={error}/>
      
    </div>
  );
}

export default App;

