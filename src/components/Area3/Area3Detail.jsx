import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import visual from '../../assets/VisualLobe.png'

export default function Area3Detail() {
  return (
    <Card sx={{ borderLeft: '5px solid #d8be6a'}} className='card-area'>
      <img
        className='img-brain'
        src={visual}
        alt="Prefrontal Cortex"
      />
      <CardContent className='card-area-content'  >

        <Typography gutterBottom variant="h5" component="div">
          OCCIPITAL
        </Typography>
        <Typography marginBottom={'5px'} color="text.secondary" fontWeight={'bold'}>
          ¿Occipital? ¡Ah! ¡Lo de la vista!

        </Typography>
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              Funciones visuales
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              Gnosias
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              Habilidades visuoespaciales
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions  className='card-area-actions' >
        <Button  style={{width:'80%'}} color="yellow" variant="contained" size="small">Actividad</Button>

      </CardActions>
    </Card>
  );
}