import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from './Profile';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Skeleton } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 const MyTabs=()=> {
  const [value, setValue] = React.useState(0);
  const [userData , setUserData] = React.useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
  React.useEffect(()=>{
setOpen(true);
    axios.get('https://randomuser.me/api/')
    .then(function (response) {
     setUserData(response.data)
     setOpen(false)
      return response
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
      
  },[])

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      
    >
      Users
    </Link>,
    <Typography key="3" color="text.primary" style={{ wordWrap: "break-word" }}>
      {userData?.results?.[0]?.name? (userData?.results?.[0]?.name?.first + " "+userData?.results?.[0]?.name?.last):<Skeleton/>}
    </Typography>,
  ];
const [open , setOpen] = React.useState(false);
const handleClose = ()=>{
  setOpen(false);
}
  return (


    <Box paddingTop={2} sx={{ width: '100%' , }}>
      {console.log(userData)}
      
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
       <Box sx={{  }}>

      <Box mt={2} mb={2}sx={{ display: 'flex', flexDirection: 'row' }}>
      {userData?.results?.[0]?.picture?.large ?<Avatar alt="Remy Sharp" src={userData?.results?.[0]?.picture?.large  } sx={{ width: 104, height: 104 }}/>:<Skeleton variant="circular" sx={{ width: 104, height: 104 }} />
 }
        <CardContent sx={{ flex: '1 0 auto' }}>
         <Typography style={{ wordWrap: "break-word" }} variant="h5" fontWeight={700}>{ userData?.results?.[0]?.name ? (userData?.results?.[0]?.name?.first +" "+userData?.results?.[0]?.name?.last):<Skeleton></Skeleton>}</Typography>
 
        <Typography style={{ wordWrap: "break-word" }} >{userData?.results?.[0]?.name ? "VP of Engineering / Engineering" :<Skeleton></Skeleton>} </Typography>
        </CardContent>
        
      </Box>
      
    </Box>
      <Box sx={{ }}>
        <Tabs sx={{ "& button.Mui-selected" : {color:"white"}}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Security" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Profile userData={userData}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Security Tab
      </TabPanel>
      
    </Box>
  );
}
export default MyTabs;