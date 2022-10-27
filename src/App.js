import Home from './pages/Home/Home'
import Indicators from './pages/Indicators/Indicators'
import People from './pages/People/People'
import Structures from './pages/Structures/Structures'
import Menu from './components/Menu/Menu'

import Grid from '@mui/material/Grid';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Grid container spacing={2} style={{marginTop:'20px',textAlign:'center'}}>
        <Grid item xs={2} sm={4} md={2} style={{paddingTop:'0'}}>
          <Menu/>
        </Grid>
        <Grid item xs={10} sm={8} md={10} style={{backgroundColor:'#d3d3d3',padding:'0'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={
              <People/>} 
            />
            <Route path="/structures" element={
              <Structures/>}             
            />
            <Route path="/indicators" element={<Indicators />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
