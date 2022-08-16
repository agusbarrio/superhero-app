import PublicLayout from '../../templates/PublicLayout';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants';
function NotFoundPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PATHS.HOME, { replace: true });
  };
  return (
    <PublicLayout title="Página no encontrada">
      <Button variant="contained" onClick={handleClick}>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ textTransform: 'none' }}
        >
          Regresar
        </Typography>
      </Button>
      <video
        style={{ width: '100%' }}
        src="/not-found.mp4"
        loop={true}
        autoPlay={true}
        muted={true}
      ></video>
    </PublicLayout>
  );
}

export default NotFoundPage;
