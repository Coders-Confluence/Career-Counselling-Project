import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Career Guidance Platform</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;