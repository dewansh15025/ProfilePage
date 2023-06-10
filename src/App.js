import logo from './logo.svg';
import './App.css';
import MyDrawer from './components/MyDrawer';
import MyTabs from './components/MyTabs';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@material-ui/core';
import { Box } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#000"
    }
    ,
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Box paddingLeft={5} >
    <aside>
        <MyDrawer />
        </aside> 
      <main>
      <Container  >
      <MyTabs/>
       </Container>
      </main>

    </Box>
         
      </ThemeProvider>
  );
}

export default App;
