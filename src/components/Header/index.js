import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
/**
 * Header component
 * @param {*} param0
 * @returns
 */
function Header({ logoutButton = false }) {
  return (
    <AppBar position="static" sx={{ height: 1 }}>
      <Toolbar variant="regular" sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{
            height: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <img
            src="bat-svgrepo-com.svg"
            alt="Super hero app"
            style={{ height: '100%' }}
          />
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            align="center"
          >
            SuperHero App
          </Typography>
        </Box>
        {logoutButton && (
          <Button color="inherit">
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ textTransform: 'none' }}
            >
              Logout
            </Typography>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  logoutButton: PropTypes.bool,
};

export default Header;
