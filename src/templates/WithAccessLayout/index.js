import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function WithAccessLayout({ children }) {
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
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: 'calc(100% - 4rem)',
          padding: '1rem',
          overflowY: 'scroll',
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
WithAccessLayout.propTypes = {
  children: PropTypes.any,
};
export default WithAccessLayout;
