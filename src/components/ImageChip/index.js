import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
export default function ImageChip({ imgSrc, alt, label }) {
  return (
    <Chip
      avatar={<Avatar alt={alt} src={imgSrc} />}
      sx={{ minWidth: 80 }}
      size="small"
      label={
        <Typography
          variant="subtitle1"
          color="inherit"
          component="div"
          align="center"
        >
          {label}
        </Typography>
      }
      variant="outlined"
    />
  );
}

ImageChip.propTypes = {
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
