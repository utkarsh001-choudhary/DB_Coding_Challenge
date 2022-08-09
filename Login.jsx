/*import React, { useState, useEffect } from "react";
import {Form, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
const Login = () => {

	const navigate = useNavigate();

	navigate.push('/')
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const handleUserChange = (e) => {
		setUser(e.target.value);
	}

	const handlePassChange = (e) => {
		setPass(e.target.value);
	}

	const verifyUserPass = () => {
		console.log("User: ", user);
		console.log("Pass: ", pass);
	}

	return (
		<div style={{ height: '100vh', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
			<h1 style={{fontSize: '4rem'}}>The Bonds App</h1>
			
			<Form style={{boxShadow: '0px 0px 7px rgba(0,0,0,0.4)', padding: '30px', borderRadius: '10px'}}>
				<Form.Group style={{marginBottom: '1rem'}} >
					<Form.Label style={{fontSize: '1.5rem'}}>Email ID</Form.Label><br/>
					<Form.Control style={{width: 'auto', fontSize: '1.5rem'}} type="email" placeholder="Enter your email" value={user} onChange={handleUserChange} />
				</Form.Group>
				<Form.Group style={{marginBottom: '1rem'}} >
					<Form.Label style={{fontSize: '1.5rem'}}>Enter your password</Form.Label><br/>
					<Form.Control style={{width: 'auto', fontSize: '1.5rem'}} type="password" placeholder="Enter your password" value={pass} onChange={handlePassChange} />
				</Form.Group>
				<Button type="submit" onClick={() => {navigate.push('/')}}>Login</Button>
			</Form>
			
		</div>
  	)
};


export default Login; */

import React, { useState } from 'react';
import styles from "./Login.module.css";
import {Routes, Route, useNavigate} from 'react-router-dom';


function Login({handleLogin,error}) {
    const [details, setDetails] = useState({name:"", email:"",password:""});
    
    const submitHandler = e => {
        e.preventDefault();

        handleLogin(details);
    }
	const navigate = useNavigate();
  	const navigateToHome =() => {
    navigate('/show');
  	}
    return(
		<div className={styles.wrapper}>
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.forminner}>
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : "" }
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type='text' name='name' id='name' onChange={e => setDetails({...details,name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name="email" id='email' onChange={e => setDetails({...details,email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name="password" id='password' onChange={e => setDetails({...details,password: e.target.value})} value={details.password}/>
                </div>
				{/* <button onClick={navigateToHome} value="LOGIN"/> */}
				
                <input type="submit" onClick={navigateToHome} value="LOGIN" />
            </div>
        </form>
		</div>
    )
}

export default Login;