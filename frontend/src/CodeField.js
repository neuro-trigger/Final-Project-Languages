import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import TuringMachineRender from './TuringMachineRender';

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
            
            <TuringMachineRender/>
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

                fetch('localhost:3000/api/longText', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ text: 'Texto largo de ejemplo' }),
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log(data);
                  })
                  .catch(error => {
                    console.error(error);
                  });


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
