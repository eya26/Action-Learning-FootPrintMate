import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const DrawerSide = () => {
  const user = useSelector(state => state.loginUserReducer.currentUser);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#17594A' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              FootprintMate
            </Typography>
            {user ? (
              <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
                Hello, {user.name}
              </Typography>
            ) : (
              <></>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer open={open} onClose={handleDrawerClose}>
        <List>
          {user ? (
            <>
              <ListItem component={Link} to="/home" onClick={handleDrawerClose}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem component={Link} to="/quiz" onClick={handleDrawerClose}>
                <ListItemText primary="Quiz" />
              </ListItem>
              <ListItem component={Link} to="/calculator" onClick={handleDrawerClose}>
                <ListItemText primary="Calculator" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem component={Link} to="/home" onClick={handleDrawerClose}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem component={Link} to="/login" onClick={handleDrawerClose}>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem component={Link} to="/quiz" onClick={handleDrawerClose}>
                <ListItemText primary="Quiz" />
              </ListItem>
              <ListItem component={Link} to="/calculator" onClick={handleDrawerClose}>
                <ListItemText primary="Calculator" />
              </ListItem>
              <ListItem component={Link} to="/dashboard" onClick={handleDrawerClose}>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerSide;
