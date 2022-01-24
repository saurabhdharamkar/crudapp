import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { showStudents } from "../Actions/StudentAction";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@material-ui/core/Button";


export const ShowStudent = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

    let studAr = useSelector((store) => store.StudentReducer)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStudents());
    }, 1000);


    return (
         <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studAr.map((student) => (
            <StyledTableRow key={student.name}>
              
              <StyledTableCell align="right">{student.id}</StyledTableCell>
              <StyledTableCell align="right">{student.name}</StyledTableCell>
              <StyledTableCell align="right">{student.department}</StyledTableCell>
              <StyledTableCell align="right">{student.year}</StyledTableCell>
              <StyledTableCell align="right">
              <NavLink to={`/student/update/${student.id}`}>
              <Button variant="contained">Update</Button>

              </NavLink>
              <NavLink to={`/students/delete/${student.id}`}>
              <Button variant="contained" style={{marginLeft:'5px'}}>Delete</Button>

              </NavLink>
              </StyledTableCell>
              
               <StyledTableCell align="right" ></StyledTableCell>
               

              <StyledTableCell ></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>       </div> 

        
    )
}