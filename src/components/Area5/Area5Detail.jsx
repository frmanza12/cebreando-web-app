import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cerebelum from '../../assets/Cerebellum.png'

export default function Area5Detail() {
  return (
    <Card sx={{borderLeft: '5px solid #ad5151'}} className='card-area'>
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
            <Typography variant="body2"  color="text.secondary"  >
              Desarrollo cognitivo: FFEE y regulación emocional.
            </Typography>
          </li>
        </ul>
      </CardContent>
     
    </Card>
  );
}