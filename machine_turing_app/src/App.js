import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import './App.css';
import CodeField from './CodeField';
import React, { useState } from 'react';

function App() {


  const [showingMachine, setshowingMachine] = useState(false);

  const changeToMachine = () => {
    setshowingMachine(true);
  };

  const changeToTextField = () => {
    setshowingMachine(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (
    <div className="App">
      <Box>
        <Grid container spacing={2} justifyContent="center" marginTop="20px">
          <Grid item xs={8}>
            <Box sx={{ bgcolor: 'background.default', alignContent: 'center' }}>
              <Item elevation={6}>
                <Box>
                  <Typography variant="h1" component="h1">
                    ¡Bienvenido al simulador de máquinas de Turing!
                  </Typography>
                </Box>
                <Box marginTop="5px">
                  <Typography variant="h3" component="h3">
                    Ingresa el código de la máquina de Turing de tu interés y podrás ver la simulación de la cinta
                  </Typography>
                </Box>
              </Item>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Item elevation={5}>
              
              

              <CodeField showingMachine={showingMachine} changeToMachine={changeToMachine} changeToTextField={changeToTextField}/>


            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
