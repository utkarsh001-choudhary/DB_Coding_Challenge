import React, { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Trades = (props) => {

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

	const [show, setShow] = useState(false);
	// const [tradeData, setTradeData] = useState(null);
	const [secData, setSecData] = useState(null);

	useEffect(() => {
		console.log("secDate: ", secData);
		if (secData) {
			setShow(true);
		}
	}, [secData]);

	const handleClose = () => { 
		setShow(false);
		setSecData(null);
	};

	const handleClick = (item) => { 
		// console.log("handleClick: ", item);
		let res = securities.filter(obj => obj.Id == item.SecurityId);
		setSecData(res[0]);
	}

	return (
		<>
			{
				props.data.map(item => {
					return (
						<>
							<div onClick={()=>handleClick(item)} style={{display: 'flex', flexDirection: 'row', boxShadow: '0px 0px 7px rgba(0,0,0,0.1)', margin: '1rem', padding: '0.5rem', borderRadius: '1rem', alignItems: 'center'}}>
								{/* <p style={{fontSize: 24, color: "#000", fontWeight: 400, flex: 1, textAlign: 'center'}}>{item.SecurityId}</p> */}
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Security ID</p>
									<p>{item.SecurityId}</p>
								</div>
								<div style={{ flex: 1, textAlign: 'center' }}>
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
						{ secData ? secData.Issuer : "" }
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>ID: {secData ? secData.Id : ""}</p>
					<p>Maturity Date: {secData ? secData.MaturityDate : ""}</p>
					<p>Coupon: {secData ? secData.Coupon : ""}</p>
					<p>Type: {secData ? secData.Type : ""}</p>
					<p>Face Value: {secData ? secData.FaceValue : ""}</p>
					<p>Status: { secData ? secData.Status : "" }</p>
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