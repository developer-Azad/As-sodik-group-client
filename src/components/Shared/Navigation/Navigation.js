import * as React from 'react';
import {useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import img from '../../images/Gold Luxury Business Logo (1).png'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button, Grid } from '@mui/material';
import './Navigation.css'

export default function Navigation() {
  const {user, logOut} = useAuth();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [users, setUsers] = useState([]);
  const userEmail = user.email;

// user role (admin) finding
  const currentUser = users.filter(member => member.email === userEmail)
  const currentUserObject = currentUser[0];
  const currentUserRole = currentUserObject?.role;
  console.log("cu ", currentUserRole);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // users data loading from database
  useEffect(() => {
    const url = `http://localhost:5000/users`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  


  return (
    <Box>
      <AppBar position="static">
        <Grid className="navbar link-container">
          <Grid item xs={12} sm={12} md={8} lg={2} className="nav-icons">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton> 
          <Link className='' to="/home">
            <img className='nav-icon' src={img} alt="" />
          </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={10}>

          <div>
          <Link className='link' to="/home">Home</Link>
          <Link className='link' to="/about">About Us</Link>
          <Link className='link' to="/">Contact</Link>
          {
            // Only for admin
            currentUserObject?.role?
          <>
          <Link className='link' to="/addmember">Add Member</Link>
          <Link className='link' to="/hisab/:memberId">All Members</Link>
          <Link className='link' to="/updateHisab">Update Hisab</Link>
          <Link className='link' to="/makeAdmin">Make Admin</Link>
          <Link className='link' to="/dashboard">Dashboard</Link>
          <Link className='link' to="/" style={{ color: 'black', fontWeight: 700}}>{ user.displayName}</Link>
          <Link className='link' to="/home" onClick={logOut}>Log out</Link>
          </>
            :
            // For registerd user
              user?.email?
              <>
              <Link className='link' to="/userDashboard">Dashboard</Link>
              <Link className='link' to="/">My Account</Link>
              <Link className='link' to="/" style={{ color: 'black', fontWeight: 700 }}>{ user.displayName}</Link>
              <Link className='link' to="/home" onClick={logOut}>Log out</Link>
              </>
              :
          <>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/login">
          <Button color="inherit">Login</Button>
          </Link>
          </>
            }
          </div>
          </Grid>
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
        </Grid>
      </AppBar>
    </Box>
  );
}