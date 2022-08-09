import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Securities = (props) => {

	// useEffect(() => {
	// 	console.log("props: ", props.data);
	// }, [])

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
							<div style={{display: 'flex', flexDirection: 'row', boxShadow: '0px 0px 7px rgba(0,0,0,0.1)', margin: '1rem', padding: '0.5rem', borderRadius: '1rem', alignItems: 'center'}}>
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
		</div>
	)
}

export default Securities;