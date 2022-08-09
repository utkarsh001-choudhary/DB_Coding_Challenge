import React, { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { findBondById } from "../../services/Bonds";

const Trades = (props) => {

	const [bond, setBond] = useState();
	const [show, setShow] = useState(false);


	useEffect(() => {
		// console.log("bond: ", bond);
		if (bond) {
			setShow(true);
		}
	}, [bond]);

	const handleClose = () => { 
		setShow(false);
		setBond(null);
	};

	const handleClick = (item) => { 
		// console.log("handleClick: ", item);
		findBondById(item.bondId).then(({ data }) => {
			// console.log("data: ", data);
			setBond(data);
		})
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
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Bond ID</p>
									<p>{item.bondId}</p>
								</div>
								<div style={{ flex: 1, textAlign: 'center' }}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Price</p>
									<p>{item.price}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Quantity</p>
									<p>{item.quantity}</p>
								</div>
								<div style={{ flex: 1, textAlign: 'center' }}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Buy/Sell</p>
									<p>{item.buySell}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Status</p>
									<p>{item.status}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Trade Date</p>
									<p>{item.tradeDate}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Settlement Date</p>
									<p>{item.settlementDate}</p>
								</div>
							</div>
						</>
					)
				})
			}
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header>
					<Modal.Title>
						{ bond ? bond.issuer : "" }
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>ID: {bond ? bond.id : ""}</p>
					<p>Coupon: {bond ? bond.coupon : ""}</p>
					<p>Face Value: {bond ? bond.faceValue : ""}</p>
					<p>Maturity Date: {bond ? bond.maturityDate : ""}</p>
					<p>Status: { bond ? bond.status : "" }</p>
					<p>Type: {bond ? bond.type : ""}</p>
					<p>CUSIP: {bond ? bond.cUSIP : ""}</p>
					<p>ISIN: { bond ? bond.iSIN: "" }</p>
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