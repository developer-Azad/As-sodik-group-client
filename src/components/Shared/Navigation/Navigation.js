import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

export default function Navigation() {
  const {user, logOut} = useAuth();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
       
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link className='link' to="/home"><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ASG
          </Typography></Link>
          
          <div className='link-container'>
          <Link className='link' to="/home">Home</Link>
          <Link className='link' to="/addmember">Add Member</Link>
          <Link className='link' to="/updateHisab">Update Hisab</Link>
          
          {
            user?.email ? 
            <>
          <NavLink style={{textDecoration: 'none', color: 'white'}} to="/makeAdmin">
          <Button color="inherit">Make Admin</Button>
          </NavLink>
          <Button onClick={logOut} color="inherit">Log out</Button>
          </>
            :
            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
          <Button color="inherit">Login</Button>
          </NavLink>
          }
          </div>
          {auth && (
            <div>
            
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}