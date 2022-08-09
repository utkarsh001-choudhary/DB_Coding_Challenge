import React, { useState, useEffect } from "react";
import Header from "../components/Header";
// import Typography from 'typography';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import {findBonds} from "../services/Bonds";

const MatureBonds=()=>{
    const dates = ["2023-09-12", "2022-08-10", "2022-06-17"];
    const [bonds, setBonds] = useState([]);

    useEffect(() => {
        findBonds().then(({ data }) => {
            setBonds(data);
      });
    }, []);
//  const dummyData=[
//     {
//          id:1,
//          maturity_date:"2023-09-12",
//          issuer:"XYZ",
//          bond_type: "A",
//          status:"A"
//     },
//     {
//         id:2,
//          maturity_date:"2022-08-10",
//          issuer:"XYZ",
//          bond_type: "A",
//          status:"A"

//     },
//     {
//         id:3,
//         maturity_date:"2022-06-17",
//         issuer:"XYZ",
//         bond_type: "A",
//         status:"A"
//     },
//     {
//         id:4,
//         maturity_date:"2021-09-12",
//         issuer:"XYZ",
//         bond_type: "A",
//         status:"A"
//     },
//     {
//         id:5,
//         maturity_date:"2022-04-12",
//         issuer:"XYZ",
//         bond_type: "A",
//         status:"A"
//     }
//  ]
 

 
  const filteredData = bonds.filter(d => new Date(d.maturityDate) - new Date() < 0);
  console.log(filteredData);
  console.log(bonds);
    return (
        <>
          <Header/>
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">BOND ID</TableCell>
              <TableCell align="center">BOND ISSUER</TableCell>
              {/* <TableCell align="right">PET AGE</TableCell> */}
              <TableCell align="center">MATURITY DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 10 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {data.id}
                </TableCell>
                <TableCell align="center">{data.issuer}</TableCell>
                {/* <TableCell align="right">31</TableCell> */}
                <TableCell align="center">
                {data.maturityDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
         { filteredData.map(data=>{
            console.log(data.id);
            <h1 >{data.id}</h1>
         })}
          
        </>
    )
};
export default MatureBonds;