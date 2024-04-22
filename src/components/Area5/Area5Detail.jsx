import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cerebelum from '../../assets/Cerebelum.png'

export default function Area5Detail() {
  return (
    <Card sx={{borderLeft: '5px solid #4a4a4a'}} className='card-area'>
      <img
        className='img-brain'
        src={cerebelum}
        alt="Prefrontal Cortex"
      />
      <CardContent className='card-area-content'>

        <Typography gutterBottom variant="h5" component="div">
          Cerebelo
        </Typography>
        <Typography color="text.secondary" fontWeight={'bold'}>
          “Árbol de la vida”
        </Typography>
        <ul>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Coordinación de movimientos
            </Typography>
          </li>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Equilibrio postural.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Desarrollo cognitivo: FFEE y regulación emocional.
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions  className='card-area-actions' >
        <Button  style={{width:'80%'}} color='black'  variant="contained" size="small">Actividad</Button>

      </CardActions>
    </Card>
  );
}