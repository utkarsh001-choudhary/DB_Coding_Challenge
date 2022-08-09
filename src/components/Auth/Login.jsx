import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

const Login = () => {

	const navigate = useNavigate();

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
		navigate("/books");
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
				<Button type="submit" onClick={verifyUserPass}>Submit</Button>
			</Form>
			
		</div>
  	)
};


export default Login;