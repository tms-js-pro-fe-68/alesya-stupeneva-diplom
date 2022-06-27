import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AppBar() {
const navigate = useNavigate();
const [anchorEl, setAnchorEl] = useState(null);
const handleOpenMenu = (event) => setAnchorEl(event.currentTarget)
const handleCloseMenu = () => setAnchorEl(null)

const handleLogOut = () => {
sessionStorage.token = '';
sessionStorage.email = '';
navigate('/', { replace: true});
handleCloseMenu()
}

    return(
        <MuiAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, width: '200px' }}>
            MyPage
          </Typography>

            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
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
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleLogOut}>Sign out</MenuItem>
              </Menu>
            </Box>
        </Toolbar>
      </MuiAppBar>
      
    )
}