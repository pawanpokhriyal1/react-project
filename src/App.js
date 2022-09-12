import './App.css';
import { useState } from 'react';
import Sidenavbar from './Components/Sidenavbar';
import Grid from '@mui/material/Grid';
import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';
import { createContext } from "react"
import Support from './Pages/Support';

export const CartContext = createContext();

function App() {
  const [cartlist, setCartlist] = useState([]);
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <BrowserRouter>
            <Grid item xs={3} md={3}>
              <Sidenavbar />
            </Grid>
            <Grid item xs={8} md={8}>
              <CartContext.Provider value={[cartlist, setCartlist]}>
                <Routes>
                  <Route path="/Collection" element={<Collection />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Support" element={<Support />} />
                </Routes>
              </CartContext.Provider>
            </Grid>
          </BrowserRouter>
        </Grid>
      </Box>
    </>
  );
}

export default App;
