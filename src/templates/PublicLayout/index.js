import { Container, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function PublicLayout({ children, title }) {
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
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {Boolean(title) && (
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" textAlign="center" component="h1">
                  {title}
                </Typography>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
PublicLayout.propTypes = {
  children: PropTypes.any,
};
export default PublicLayout;
