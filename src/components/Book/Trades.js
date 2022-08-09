import React from "react";
import Table from 'react-bootstrap/Table';

const Trades = (props) => {

	return (
		<>
			{
				props.data.map(item => {
					return (
						<>
							<div style={{display: 'flex', flexDirection: 'row', boxShadow: '0px 0px 7px rgba(0,0,0,0.1)', margin: '1rem', padding: '0.5rem', borderRadius: '1rem', alignItems: 'center'}}>
								{/* <p style={{fontSize: 24, color: "#000", fontWeight: 400, flex: 1, textAlign: 'center'}}>{item.Issuer}</p> */}
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
		</>
	)
}

export default Trades;