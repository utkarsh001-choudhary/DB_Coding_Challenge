import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../Header";
import Trades from "./Trades";
import { findTrades } from "../../services/Trades";

const Book = () => {

	const navigate = useNavigate();
	const location = useLocation();
	const [trades, setTrades] = useState([]);

	useEffect(() => {
		if (!location.state.id) { 
			navigate("/books")
		}
		// console.log("Location: ", location.state);
		findTrades().then(({ data }) => {
            setTrades(data);
      });
	}, [])
	
	// useEffect(() => {
	// 	console.log("Trades: ", trades);
	// }, [trades])

	return (
		<>
			<Header />
			<h1 style={{margin: "1rem"}}>{ location.state.name }</h1>
			{/* <Tabs
				defaultActiveKey="securities"
				className="mb-3"
				fill
			>
				<Tab eventKey="securities" title="Securities">
					<Securities data={securities.filter(item => item.BookId == location.state.id)} />
				</Tab>
				<Tab eventKey="trades" title="Trades">
					<Trades data={trades.filter(item => item.BookId == location.state.id)} />
				</Tab>
			</Tabs> */}
			<Trades data={trades.filter(item => item.bookId == location.state.id)} />
		</>
 	)
};
export default Book;