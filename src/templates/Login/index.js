import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';

/**
 *  Template for login page.
 * @param {*} param0
 * @returns
 */
function Login({ mainContent, headerContent }) {
  return (
    <Grid
      container
      sx={{
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Grid item xs={12} sx={{ height: '4rem' }}>
        {headerContent}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: 'calc(100% - 4rem)',
        }}
      >
        <Container maxWidth="xs" sx={{ height: '100%' }}>
          {mainContent}
        </Container>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  mainContent: PropTypes.any,
  headerContent: PropTypes.any,
};
export default Login;
