import React from 'react';
import { Box, Button } from "@mui/material";

const handlePrint = () => {
  window.print();
};

export default function PRINT() {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '10%' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handlePrint} 
          sx={{ flexGrow: 1, maxWidth: '200px', minWidth: '100px' }}
        >
          Imprimir
        </Button>
      </Box>
    );
  }
  