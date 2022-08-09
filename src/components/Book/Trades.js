import React, { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Trades = (props) => {

	const [show, setShow] = useState(false);
	const [tradeData, setTradeData] = useState(null);

	useEffect(() => {
		console.log("tradeDate: ", tradeData);
		if (tradeData) {
			setShow(true);
		}
	}, [tradeData]);

	const handleClose = () => { 
		setShow(false);
		setTradeData(null);
	};
	const handleClick = (item) => { 
		// console.log("handleClick: ", item);
		setTradeData(item);
	}

	return (
		<>
			{
				props.data.map(item => {
					return (
						<>
							<div onClick={()=>handleClick(item)} style={{display: 'flex', flexDirection: 'row', boxShadow: '0px 0px 7px rgba(0,0,0,0.1)', margin: '1rem', padding: '0.5rem', borderRadius: '1rem', alignItems: 'center'}}>
								<p style={{fontSize: 24, color: "#000", fontWeight: 400, flex: 1, textAlign: 'center'}}>{item.SecurityIssuer}</p>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Price</p>
									<p>{item.Price}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Quantity</p>
									<p>{item.Quantity}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									{/* <p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Maturity Date</p> */}
									<p>{item.Buy_Sell}</p>
								</div>
							</div>
						</>
					)
				})
			}
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header>
					<Modal.Title>
						{ tradeData ? tradeData.SecurityIssuer : "" }
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Trade ID: {tradeData ? tradeData.Id : ""}</p>
					<p>Book ID: {tradeData ? tradeData.BookId : ""}</p>
					<p>Counter Party Id: {tradeData ? tradeData.CounterPartyId : ""}</p>
					<p>Security ID: {tradeData ? tradeData.SecurityId : ""}</p>
					<p>Quantity: {tradeData ? tradeData.Quantity : ""}</p>
					<p>Status: {tradeData ? tradeData.Status : ""}</p>
					<p>Price: {tradeData ? tradeData.Price : ""}</p>
					<p>Buy/Sell: {tradeData ? tradeData.Buy_Sell : ""}</p>
					<p>Trade Date: {tradeData ? tradeData.tradeDate : ""}</p>
					<p>Settlement Date: {tradeData ? tradeData.SettlementDate : ""}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Trades;