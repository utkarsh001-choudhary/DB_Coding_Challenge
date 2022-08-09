import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../Header";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Trades from "./Trades";
import Securities from "./Securities";

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
		BookId: 2,
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

	const securities = [
	{
		Id: 1,
		BookId: 2,
		ISIN: "IN8364U01019",
		Issuer: "Adani",
		MaturityDate: "25-Mar-2025",
		Coupon: 8.49,
		Type: "Regular",
		FaceValue: 12.5,
		Status: "Active"
	},
	{
		Id: 2,
		BookId: 1,
		ISIN: "IN8364U05359",
		Issuer: "NTPC",
		MaturityDate: "25-Feb-2023",
		Coupon: 6.8,
		Type: "Regular",
		FaceValue: 7.2,
		Status: "Active"
	},
	{
		Id: 3,
		BookId: 1,
		ISIN: "IN8364U07821",
		Issuer: "Reliance",
		MaturityDate: "25-Aug-2023",
		Coupon: 3.12,
		Type: "Regular",
		FaceValue: 10.1,
		Status: "Active"
	},
	{
		Id: 4,
		BookId: 1,
		ISIN: "IN8364U01010",
		Issuer: "Apple",
		MaturityDate: "25-Oct-2022",
		Coupon: 12.86,
		Type: "Regular",
		FaceValue: 14.49,
		Status: "Active"
	}
	]

	return (
		<>
			<Header />
			<Tabs
				defaultActiveKey="securities"
				className="mb-3"
				fill
			>
				<Tab eventKey="securities" title="Securities">
					<Securities data={securities.filter(item => item.BookId == location.state.id)} />
				</Tab>
				<Tab eventKey="trades" title="Trades">
					{/* <h1>Hello</h1> */}
					<Trades data={trades.filter(item => item.BookId == location.state.id)} />
				</Tab>
			</Tabs>
		</>
 	)
};
export default Book;