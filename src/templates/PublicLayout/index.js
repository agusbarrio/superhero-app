import { Container, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function PublicLayout({ children }) {
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
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </Container>
      </Grid>
    </Grid>
  );
}
PublicLayout.propTypes = {
  children: PropTypes.any,
};
export default PublicLayout;
