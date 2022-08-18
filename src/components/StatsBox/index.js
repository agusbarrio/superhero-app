import { Stack, Grid } from '@mui/material';
import ImageChip from '../ImageChip';
/**
 *
 * @param {*} param0
 * @returns
 */
function StatsBox({
  combat,
  power,
  durability,
  speed,
  intelligence,
  strength,
  ...props
}) {
  return (
    <Grid container columns={2} sx={{ justifyContent: 'center' }} spacing={0.5}>
      <Grid item>
        <Stack
          spacing={1.5}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <ImageChip imgSrc="assets/combat.svg" alt="Combate" label={combat} />
          <ImageChip
            imgSrc="assets/durability.svg"
            alt="Durabilidad"
            label={durability}
          />
          <ImageChip
            imgSrc="assets/intelligence.svg"
            alt="Inteligencia"
            label={intelligence}
          />
        </Stack>
      </Grid>
      <Grid item>
        <Stack
          spacing={1.5}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <ImageChip imgSrc="assets/power.svg" alt="Poder" label={power} />
          <ImageChip imgSrc="assets/speed.svg" alt="Velocidad" label={speed} />
          <ImageChip
            imgSrc="assets/strength.svg"
            alt="Fuerza"
            label={strength}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default StatsBox;
