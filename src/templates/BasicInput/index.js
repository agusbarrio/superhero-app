import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

function BasicInput({ children }) {
  return (
    <Grid item xs={12}>
      {children}
    </Grid>
  );
}
BasicInput.propTypes = {
  children: PropTypes.any,
};
export default BasicInput;
