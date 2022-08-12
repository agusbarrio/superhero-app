import { Grid, Typography } from '@mui/material';
import SubmitButton from '../../components/SubmitButton';
import React from 'react';
import PropTypes from 'prop-types';

function BasicForm({ children, title, textSubmitButton }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {!!title && (
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" textAlign="center" component="h1">
            {title}
          </Typography>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </Grid>
      {!!textSubmitButton && (
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <SubmitButton>{textSubmitButton}</SubmitButton>
        </Grid>
      )}
    </Grid>
  );
}

BasicForm.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  textSubmitButton: PropTypes.string,
};
export default BasicForm;
