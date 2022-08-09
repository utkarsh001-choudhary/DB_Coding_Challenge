import React, { useState, useEffect } from "react";
import Header from "../Header";
// import Button from "react-bootstrap/esm/Button";
import { useNavigate } from 'react-router-dom';
import { findBooks } from "../../services/Books";

const Books = () => {

	const navigate = useNavigate();
	const [books, setBooks] = useState([]);

	useEffect(() => {
		findBooks().then(({ data }) => {
            setBooks(data);
      	});
	}, [])

	// useEffect(() => {
	// 	console.log("books: ", books);
	// }, [books])

	// const Books = [
	// 	{
	// 		id: 1,
	// 		name: "Book 1",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Book 2",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Book 3",
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Book 4",
	// 	},
	// ];

	const handleClick = (id, name) => {
		navigate("/book", { state: { id: id, name: name } });
	}

	return (
		<div>
			<Header />
			{
				books.map(item => {
					return (
						<div key={item.id} onClick={()=>handleClick(item.id, item.book_name)} style={{ boxShadow: '0px 0px 7px rgba(0,0,0,0.3)', margin: "1rem", padding: "0.5rem", borderRadius: "0.5rem"	}}>
							<p style={{margin: "0.3rem"}}>Book ID: { item.id }</p>
							<p style={{fontSize: 20, fontWeight: 600, margin: "0.3rem"}}>{item.book_name}</p>
						</div>
					)
				})
			}
		</div>
	)
}

export default Books