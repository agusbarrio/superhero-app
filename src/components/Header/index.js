import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants';
function Header() {
  const { isLogged, logout } = useUser();
  const navigate = useNavigate();
  const clickLogout = () => {
    logout();
    navigate(PATHS.HOME, { replace: true });
  };
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
            src="assets/bat-svgrepo-com.svg"
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
        {isLogged && (
          <Button color="inherit">
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ textTransform: 'none' }}
              onClick={clickLogout}
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
