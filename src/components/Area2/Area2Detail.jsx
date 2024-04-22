import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import parietal from '../../assets/ParietalLobe.png'

export default function Area2Detail() {
  return (
    <Card sx={{borderLeft: '5px solid #77d5d3' }} className='card-area'>
      <img
        className='img-brain'
        src={parietal}
        alt="Prefrontal Cortex"
      />
      <CardContent className='card-area-content'>
        <Typography gutterBottom variant="h5" component="div">
          Parietal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ¿Nunca había oído esta palabra, a qué se refiere? Es un área cerebral situada seguida del lóbulo frontal y entre sus acciones están:
        </Typography>
        <ul>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Praxias
            </Typography>
          </li>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Procesamiento sensorial. Orientación espacial
            </Typography>
          </li>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Procesamiento información simbólica: Uso del lenguaje
            </Typography>
          </li>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Procesamiento información numérica: Operaciones matemáticas. Pensamiento abstracto
            </Typography>
          </li>
          <li>
            <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
              “Síndrome de Gerstmann”
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions className='card-area-actions' >
        <Button style={{ width: '80%' }} variant="contained" color="primaryAqua" size="small">Actividad</Button>

      </CardActions>
    </Card>
  );
}