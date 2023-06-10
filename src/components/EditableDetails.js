import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@material-ui/core';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Skeleton } from '@mui/material';


function createData(icon,fieldName , fieldValue ,extraItem ) {
    return { icon,fieldName, fieldValue,extraItem  };
  }

  const rowsJobDetails = [
    
    createData(<GroupsOutlinedIcon sx={{verticalAlign:"middle"}}/>,'Company Size', 
    
   ),
    createData(<BusinessOutlinedIcon sx={{verticalAlign:"middle"}}/>,'Industry', "AI Ops" ),
  ];

export default function EditableDetails({header ,user }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small"  sx={{ backgroundColor:"#191919",
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}>
        <TableHead>
          <TableRow >
            <TableCell  colspan={5} sx={{fontWeight: 700 , fontSize:20}}>{header}</TableCell>
            <TableCell colspan={1} align='right'><Checkbox defaultChecked/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
             
            >
              <TableCell component="th" scope="row">
              <DriveFileRenameOutlineIcon sx={{verticalAlign:"middle"}}/> Company Name
              </TableCell>
              
              
              <TableCell align="left"> {user? <TextField id="" fullWidth  variant="filled" defaultValue={"cloudAEye"} />:<Skeleton/>}</TableCell>
              
            </TableRow>

            <TableRow
             
            >
              <TableCell component="th" scope="row">
              <InsertLinkOutlinedIcon sx={{verticalAlign:"middle"}}/> Website
              </TableCell>
              
              
              <TableCell align="left">{user? <TextField id="" fullWidth  variant="filled" defaultValue={"www.cloudaeye.com"} />:<Skeleton/>}</TableCell>
              
            </TableRow>


            <TableRow
             
            >
              <TableCell component="th" scope="row">
              <LocalPhoneOutlinedIcon sx={{verticalAlign:"middle"}}/> Phone
              </TableCell>
              
              
              <TableCell align="left">{user? <TextField id="" fullWidth  variant="filled" defaultValue={"12345678"} />:<Skeleton/>}</TableCell>
              
            </TableRow>

            <TableRow
             
            >
              <TableCell component="th" scope="row">
              <GroupsOutlinedIcon sx={{verticalAlign:"middle"}}/> Company Size
              </TableCell>
              
              
              <TableCell align="left">{user?<Select fullWidth
      labelId="demo-simple-select-filled-label"
      id="demo-simple-select-filled"
      defaultValue={1}
      
    >
      
      <MenuItem value={1}>Small (0-10) </MenuItem>
      <MenuItem value={2}>Medium (11-50)</MenuItem>
      <MenuItem value={3}>Large (51-100 )</MenuItem>
    </Select> :<Skeleton/>}</TableCell>
              
            </TableRow>
            <TableRow
             
            >
              <TableCell component="th" scope="row">
              <BusinessOutlinedIcon sx={{verticalAlign:"middle"}}/> Industry
              </TableCell>
              
              
              <TableCell align="left">{user? <TextField id="" fullWidth  variant="filled" defaultValue={"AI Ops"} />:<Skeleton/>}</TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}