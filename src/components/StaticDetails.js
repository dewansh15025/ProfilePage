import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Typography } from '@material-ui/core';

export default function StaticDetails({header , rows }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" sx={{
        backgroundColor:"#191919",
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}>
        <TableHead >
          <TableRow>
            <TableCell colspan={6} sx={{fontWeight: 700,fontSize:20}}>{header}</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{  }}
            >
              <TableCell component="th" scope="row">
              <Typography sx={{ display: "flex", alignItems: "center" }}>
              {row.icon}
              {row.fieldName}
      </Typography>
               
              </TableCell>
              
              
              <TableCell align="left">{row.fieldValue}{row.extraItem}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}