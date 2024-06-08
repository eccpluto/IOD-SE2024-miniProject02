import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    // TODO this will use UserContext
    const [auth, setAuth] = React.useState(true);
    const [anchorElMain, setAnchorElMain] = React.useState(null);
    const [anchorElAccount, setAnchorElAccount] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMainMenu = (event) => {
        setAnchorElMain(event.currentTarget);
    }

    const handleAccountMenu = (event) => {
        setAnchorElAccount(event.currentTarget);
    }

    const handleClose = () => {
        // reset both anchors to null
        setAnchorElAccount(null);
        setAnchorElMain(null);

    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* wrap controls */}
            {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
            <AppBar position="absolute">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="main menu"
                        aria-controls='menu-main'
                        aria-haspopup="true"
                        onClick={handleMainMenu}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-main"
                        anchorEl={anchorElMain}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElMain)}
                        onClose={handleClose}
                    >
                        {/* home should display generic / same data for either auth state */}
                        <MenuItem key="home" onClick={handleClose}>
                            <NavLink to={'/'}>Home</NavLink>
                        </MenuItem>

                        <MenuItem key="navigator" onClick={handleClose}>
                            <NavLink to={'/navigator'}>Navigator</NavLink>
                        </MenuItem>

                        <MenuItem key="about" onClick={handleClose}>
                            <NavLink to={'/about'}>About Perspector</NavLink>
                        </MenuItem>
                    </Menu>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        Perspector
                    </Typography>

                    {/* account button */}
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-account"
                                aria-haspopup="true"
                                onClick={handleAccountMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-account"
                                anchorEl={anchorElAccount}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElAccount)}
                                onClose={handleClose}
                            >
                                <MenuItem key="account" onClick={handleClose}>
                                    <NavLink to={'/account'}>My Account</NavLink>
                                </MenuItem>

                                <MenuItem key="dashboard" onClick={handleClose}>
                                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                                </MenuItem>

                                <MenuItem key="library" onClick={handleClose}>
                                    <NavLink to={'/library'}>Library</NavLink>
                                </MenuItem>

                                {/* We should repalce the account circle with a "login" option when !auth */}
                                <MenuItem key="logout" onClick={handleClose}>
                                    <NavLink to={'/logout'}>Logout</NavLink>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
