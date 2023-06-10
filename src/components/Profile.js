import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import BasicTable from './StaticDetails';
import StaticDetails from './StaticDetails';
import TransgenderIcon from '@mui/icons-material/Transgender';
import CakeIcon from '@mui/icons-material/Cake';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import { Checkbox, Tooltip } from '@material-ui/core';
import EditableDetails from './EditableDetails';
import UserRoleTable from './UserRoleTable';
import { Skeleton } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


 

export default function Profile({userData}) {

  function createData(icon,fieldName , fieldValue ,extraItem ) {
    return { icon,fieldName, fieldValue,extraItem  };
  }
const rowsBasicDetails = [
    createData(<DriveFileRenameOutlineIcon sx={{verticalAlign:"middle"}}/>,'First Name',userData?.results?.[0]?.name? userData?.results?.[0]?.name?.first:<Skeleton/>),
    createData(<DriveFileRenameOutlineIcon sx={{verticalAlign:"middle"}}/>,'Last Name',userData?.results?.[0]?.name? userData?.results?.[0]?.name?.last : <Skeleton/> ),
    createData(<TransgenderIcon sx={{verticalAlign:"middle"}}/>,'Gender',userData?.results?.[0]?.gender? userData?.results?.[0]?.gender :<Skeleton/> ),
    createData(<CakeIcon sx={{verticalAlign:"middle"}}/>,'BirthDay', userData?.results?.[0]?.dob? userData?.results?.[0]?.dob?.date.substring(0,10):<Skeleton/>)
  ];
  const rowsContactDetails = [
    createData(<EmailOutlinedIcon sx={{verticalAlign:"middle"}}/>,'e-mail',userData?.results?.[0]?.email? userData?.results?.[0]?.email:<Skeleton></Skeleton> ),
    createData(<LocalPhoneOutlinedIcon sx={{verticalAlign:"middle"}}/>,'Phone', userData?.results?.[0]?.phone ?("+1 "+userData?.results?.[0]?.phone):<Skeleton></Skeleton> ),
    createData(<PlaceOutlinedIcon sx={{verticalAlign:"middle"}}/>,'Location',userData?.results?.[0]?.location?(userData?.results?.[0]?.location?.city +", "+userData?.results?.[0]?.location?.country) :<Skeleton></Skeleton> ),
    createData(<LinkedInIcon sx={{verticalAlign:"middle"}}/>,'Linkedin',userData?.results?.[0]? "https://www.linkedin.com/company/cloudaeye":<Skeleton/>,userData?.results?.[0]?<Tooltip placement='top' title="Copy"><ContentCopyOutlinedIcon/></Tooltip>:<Skeleton/>)
  ];
  const rowsJobDetails = [
    createData(<WorkOutlineOutlinedIcon sx={{verticalAlign:"middle"}}/>,'Job Title',userData?.results?.[0]? "VP of Engineering":<Skeleton/> ),
    createData(<SchemaOutlinedIcon sx={{transform: 'rotate(270deg)' , verticalAlign:"middle"}}/>,'Department', userData?.results?.[0]?"Engineering":<Skeleton/> ),
   
  ];
  
    
  return (
    <Box sx={{ flexGrow: 1 }}>
     
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={3.5}>
         <StaticDetails header={"Basic Details"} rows={rowsBasicDetails}/>
        </Grid>
        <Grid xs={12} md={6} lg={5}>
        <StaticDetails header={"Contact Details"} rows={rowsContactDetails}/>
        </Grid>
        <Grid xs={12} md={6} lg={3.5}>
        <StaticDetails header={"Job Details"} rows={rowsJobDetails}/>
        </Grid>
        <Grid xs={12} md={6} lg={5}>
       <EditableDetails header={"Company Details"}  user ={userData}/>
        </Grid>
        <Grid xs={12} md={6} lg={6}>
       <UserRoleTable title={["User Roles",<Checkbox  defaultChecked/> ]} header={["Group","Role"]} user={userData}/>
        </Grid>
      </Grid>
    </Box>
  );
}