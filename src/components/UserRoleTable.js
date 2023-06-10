import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box, MenuItem, Select, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#4d4d4d",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    
    '&:nth-of-type(odd)': {
      backgroundColor: "#333333",
    },
    
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },'&:first-of-type':{
        backgroundColor:"#4d4d4d"
    },
  }));

  function Selector(){
    return (<><Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        defaultValue={1}
        label="Age"
        
      >
        
        <MenuItem value={1}>User</MenuItem>
        <MenuItem value={2}>Admin</MenuItem>
        
      </Select></>);
  }
export default function UserRoleTable({title, header , user }) {
    function createData(fieldName , fieldValue  ) {
        return { fieldName, fieldValue  };
      }
    const rowsRoleDetails = [
        createData("Tenant Admin",user? <Selector/>:<Skeleton/> ),
        createData("Logs", user? <Selector/>:<Skeleton/> ),
        createData("Metrics", user? <Selector/>:<Skeleton/> ),
        createData("DashBoards", user? <Selector/>:<Skeleton/> ),
        createData("Traces", user? <Selector/>:<Skeleton/> ),
        createData("Billing", user? <Selector/>:<Skeleton/> ),
      ];
    return (
        <Box>

        
      <TableContainer component={Paper}>
        <Table  size="small" sx={{
             backgroundColor:"#191919",
      [`& .${tableCellClasses.root}`]: {
        borderBottom: "none"
      }
    }}>
          <TableHead >
            <TableRow>
              <TableCell  sx={{fontWeight: 700,fontSize:20}}>{title[0]}</TableCell>
              <TableCell align='right' sx={{fontWeight: 700,fontSize:20}}>{title[1]}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody><StyledTableRow >
          <StyledTableCell  sx={{fontWeight: 700,fontSize:20}}>{header[0]}</StyledTableCell>
              <StyledTableCell align='right' sx={{fontWeight: 700,fontSize:20}}>{header[1]}</StyledTableCell>
              </StyledTableRow>
            {rowsRoleDetails.map((row) => (
              <StyledTableRow 
                key={row.name}
                sx={{  }}
              >
                <StyledTableCell component="th" scope="row">
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                {row.icon}
                {row.fieldName}
        </Typography>
                 
                </StyledTableCell>
                
                
                <StyledTableCell align="right">{row.fieldValue}{row.extraItem}</StyledTableCell>
                
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    );
  }