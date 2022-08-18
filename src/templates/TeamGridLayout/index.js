import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function TeamGridLayout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: '1rem',
      }}
    >
      {children}
    </Box>
  );
}
TeamGridLayout.propTypes = {
  children: PropTypes.any,
};
export default TeamGridLayout;
