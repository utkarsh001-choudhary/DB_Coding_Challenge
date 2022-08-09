import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

const Securities = (props) => {

	// useEffect(() => {
	// 	console.log("props: ", props.data);
	// }, [])

	const [show, setShow] = useState(false);
	const [secData, setSecData] = useState(null);

	useEffect(() => {
		console.log("secData: ", secData);
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
		setSecData(item);
	}
	

	return (
		<div style={{display: 'flex', flexDirection: 'row', height: '100%',}}>
			{/* <div style={{flex: 2, padding: '1rem', background: 'rgba(0,0,0,0.1)', margin: '1rem', padding: '0.5rem', borderRadius: '1rem',}}>
				<Form>
					<Form.Check type={"checkbox"} id={"matured-recently"} >
						<Form.Check.Input type={"checkbox"} />
						<Form.Check.Label>{"Matured Recently"}</Form.Check.Label>
					</Form.Check>
					
				</Form>
			</div> */}
			<div style={{flex: 8}}>
				{props.data.map(item => {
					return (
						<>
							<div onClick={()=>handleClick(item)} style={{display: 'flex', flexDirection: 'row', boxShadow: '0px 0px 7px rgba(0,0,0,0.1)', margin: '1rem', padding: '0.5rem', borderRadius: '1rem', alignItems: 'center'}}>
								<p style={{fontSize: 24, color: "#000", fontWeight: 400, flex: 1, textAlign: 'center'}}>{item.Issuer}</p>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Coupon</p>
									<p>{item.Coupon}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Face Value</p>
									<p>{item.FaceValue}</p>
								</div>
								<div style={{flex: 1, textAlign: 'center'}}>
									<p style={{marginBottom: 0, color: "rgba(0,0,0,0.7)"}}>Maturity Date</p>
									<p>{item.MaturityDate}</p>
								</div>
							</div>
						</>
					)
				})}
			</div>

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
		</div>
	)
}

export default Securities;