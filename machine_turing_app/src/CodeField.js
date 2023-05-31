import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import TuringMachine from './TuringMachine';

const CodeField = ({ showingMachine, changeToMachine, changeToTextField}) => {

  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>

            { showingMachine ? 
            
            <TuringMachine/>
            : 
            <Box margin={'10px'}>
                <TextField
                multiline
                rows={15}
                variant="outlined"
                label="Texto Multilinea"
                fullWidth
                value={textFieldValue}
                onChange={handleTextFieldChange}
                />
          </Box>}
          
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            {

                !showingMachine ?

                <Button
              variant="contained"
              onClick={() => {
                console.log(textFieldValue);
                changeToMachine();
              }}
            >
              Cargar Máquina de Turing
            </Button>

            :

            <Button
              variant="contained"
              onClick={() => {
                console.log(textFieldValue);
                changeToTextField();
              }}
            >
              Editar Máquina de Turing
            </Button>


            }
            
            {showingMachine && <Button
              variant="contained"
              onClick={() => {
                console.log("Siguiente");
              }}
            >
              Siguiente
            </Button>}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CodeField;
