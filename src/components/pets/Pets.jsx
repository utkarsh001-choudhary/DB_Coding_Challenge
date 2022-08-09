import React, { useState, useEffect } from "react";
import { findPets } from "../../services/PetServices";
import styles from "./Pets.module.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Header from "../Header";
import { Link } from "react-router-dom";
export const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    findPets().then(({ data }) => {
      setPets(data);
    });
  }, []);
  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">BOOK ID</TableCell>
              <TableCell align="right">BOOK NAME</TableCell>
              {/* <TableCell align="right">PET AGE</TableCell> */}
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet) => (
              <TableRow
                key={pet.id}
                sx={{ "&:last-child td, &:last-child th": { border: 10 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {pet.id}
                </TableCell>
                <TableCell align="right">{pet.name}</TableCell>
                {/* <TableCell align="right">31</TableCell> */}
                <TableCell align="center">
                <Link to="/show">
                  <Button
                    variant="contained"
                    href="#contained-buttons"
                    className={styles.button}
                  >
                    Link
                  </Button>
                </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {pets.map((pet) => (
        <div className={styles.pets}>
          <div>ID: {pet.id}</div>
          <div>Name: {pet.name} </div>
          <div>Age: {pet.age}</div>
          <Button variant="contained" href="#contained-buttons" className={styles.button}>
            Link
          </Button>
        </div>
      ))} */}
    </>
  );
};
