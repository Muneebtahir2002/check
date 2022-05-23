import React from 'react';
import { alignPropType } from 'react-bootstrap/esm/types';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography } from '@mui/material';
const TopMenu = () => {
    return ( <div>
   <AppBar position="static" color="primary">
       <Toolbar variant="dense">
           <Typography variant='h6'color="inherit">
            <Link to="/" style={{color:"white",padding:"5px"}} >Home/Landing Page</Link>
           </Typography>
           <Typography variant='h6'color="inherit">
            <Link to="/products" style={{color:"white",padding:"5px"}} >Products</Link>
           </Typography>
           <Typography variant='h6'color="inherit">
            <Link to="/contact-us" style={{color:"white",padding:"5px"}} >Contact Us</Link>
           </Typography>
       </Toolbar>
   </AppBar>
    </div> );
}
 
export default TopMenu

