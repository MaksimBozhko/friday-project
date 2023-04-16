import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div style={{  minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
    <Box sx={{ display: 'flex', height: '100%', textAlign: 'center'}}>
      <CircularProgress />
    </Box>
    </div>
  );
}