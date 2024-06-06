import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cerebelum from '../../assets/Cerebellum.png'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Area5Detail() {
  const navigate = useNavigate();
  return (
    <Card sx={{ borderLeft: '5px solid #ad5151' }} className='card-area'>
      <img
        className='img-brain'
        src={cerebelum}
        alt="Prefrontal Cortex"
      />
      <CardContent className='card-area-content'>

        <Typography gutterBottom variant="h5" component="div">
          CEREBELO
        </Typography>
        <Typography marginBottom={'5px'} color="text.secondary" fontWeight={'bold'}>
          “Árbol de la vida”
        </Typography>
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              Coordinación de movimientos
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              Equilibrio postural.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              Desarrollo cognitivo: FFEE y regulación emocional.
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions className='card-area-actions' >
        <Button
          onClick={() => navigate('/activity/cerebelo')}
          style={{ width: '80%' }} variant="contained" color="red" size="small">Actividad</Button>

      </CardActions>
    </Card>
  );
}