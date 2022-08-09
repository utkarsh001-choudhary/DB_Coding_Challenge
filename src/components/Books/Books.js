import React from "react";
import Header from "../Header";
// import Button from "react-bootstrap/esm/Button";
import { useNavigate } from 'react-router-dom';

const Books = () => {

	const navigate = useNavigate();

	const Books = [
		{
			id: 1,
			name: "Book 1",
		},
		{
			id: 2,
			name: "Book 2",
		},
		{
			id: 3,
			name: "Book 3",
		},
		{
			id: 4,
			name: "Book 4",
		},
	];

	const handleClick = (id, name) => {
		navigate("/book", { state: { id: id, name: name } });
	}

	return (
		<div>
			<Header />
			{
				Books.map(item => {
					return (
						<div onClick={()=>handleClick(item.id, item.name)} style={{ boxShadow: '0px 0px 7px rgba(0,0,0,0.3)', margin: "1rem", padding: "0.5rem", borderRadius: "0.5rem"	}}>
							<p style={{margin: "0.3rem"}}>Book ID: { item.id }</p>
							<p style={{fontSize: 20, fontWeight: 600, margin: "0.3rem"}}>{item.name}</p>
						</div>
					)
				})
			}
		</div>
	)
}

export default Books