import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../Header";
import Trades from "./Trades";

const Book = () => {

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!location.state.id) { 
			navigate("/books")
		}
		console.log("Location: ", location.state);
	}, [])
	

	const trades = [
	{
		id: 1,
		BookId: 1,
		CounterPartyId: 1,
		SecurityId: 1,
		SecurityIssuer: "Adani",
		Quantity: 5,
		Status: "Settled",
		Price: 9,
		Buy_Sell: "Buy",
		TradeDate: "09082022",
		SettlementDate: "09082022",
	},
	{
		id: 2,
		BookId: 1,
		CounterPartyId: 1,
		SecurityId: 3,
		SecurityIssuer: "Reliance",
		Quantity: 5,
		Status: "Settled",
		Price: 4,
		Buy_Sell: "Sell",
		TradeDate: "09082022",
		SettlementDate: "09082022",
	},
	{
		id: 3,
		BookId: 1,
		CounterPartyId: 1,
		SecurityId: 2,
		SecurityIssuer: "NTPC",
		Quantity: 5,
		Status: "Settled",
		Price: 1,
		Buy_Sell: "Sell",
		TradeDate: "09082022",
		SettlementDate: "09082022",
	},
	{
		id: 4,
		BookId: 1,
		CounterPartyId: 1,
		SecurityId: 4,
		SecurityIssuer: "Apple",
		Quantity: 5,
		Status: "Settled",
		Price: 14,
		Buy_Sell: "Buy",
		TradeDate: "09082022",
		SettlementDate: "09082022",
	}
	];

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
			<Trades data={trades.filter(item => item.BookId == location.state.id)} />
		</>
 	)
};
export default Book;