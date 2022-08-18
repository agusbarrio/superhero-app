import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '../Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import StatsBox from '../StatsBox';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
export default function HeroCard({ name, stats, imgSrc }) {
  const isMobile = useMediaQuery('(max-width:500px)');
  useEffect(() => {
    console.log(isMobile);
  });
  return (
    <Card
      sx={{
        display: !isMobile && 'flex',
        justifyContent: 'space-between',
        height: isMobile ? 'calc(100vh - 6rem)' : 'calc((100vh - 7rem) / 2)',
        width: isMobile ? '260px' : '375px',
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        sx={{
          height: isMobile ? '50%' : '100%',
          width: isMobile ? '100%' : '50%',
          objectFit: 'cover',
        }}
        image={imgSrc}
      />

      <CardContent
        sx={{
          height: isMobile ? '50%' : '100%',
          width: isMobile ? '100%' : '50%',
          paddingX: '0.5rem',
          paddingY: '1rem !important',
        }}
      >
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
            margin={0}
            sx={{ overflowWrap: 'break-word', width: '100%' }}
          >
            {name}
          </Typography>
          <StatsBox
            combat={stats.combat}
            intelligence={stats.intelligence}
            speed={stats.speed}
            strength={stats.strength}
            durability={stats.durability}
            power={stats.power}
          />
          <Button>Leer más</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

HeroCard.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  stats: PropTypes.shape({
    combat: PropTypes.number,
    power: PropTypes.number,
    durability: PropTypes.number,
    speed: PropTypes.number,
    intelligence: PropTypes.number,
    strength: PropTypes.number,
  }),
};
