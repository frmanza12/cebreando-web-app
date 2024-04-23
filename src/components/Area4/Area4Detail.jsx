import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';
import hipoCampus from '../../assets/Hippocampus.png'
import temporal from '../../assets/TemporalLobe.png'
export default function Area4Detail() {
  return (
    <Card sx={{ borderLeft: '5px solid #9cd27d' }} className='card-area'>
      <Carousel className='carousel-area4' controls={false}  >
        <Carousel.Item>
          <img
            className='img-brain'
            src={temporal}
            alt="Prefrontal Cortex"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='img-brain'
            src={hipoCampus}
            alt="Prefrontal Cortex"
          />
        </Carousel.Item>
      </Carousel>

      <CardContent
        className='card-area-content'
      >

        <Typography  gutterBottom variant="h5" component="div">
          Temporal
        </Typography>
        <ul>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              Lenguaje – Audición: <strong> Comprensión.</strong>
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary"  >
              <strong> Sistema límbico:</strong>
            </Typography>
            <ul>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Hipocampo <span style={{fontStyle:'italic'}}>“Caballito de Mar”</span>. Memoria.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Amígdala. Desarrollo emocional (secuestro amigdalino, secuestro emocional).
                </Typography>
              </li>

            </ul>
          </li>
          <li>
            <Typography variant="body2"  color="text.secondary"  >
              Conductas complejas de aprendizaje y motivación.
            </Typography>
          </li>
          <li>
            <Typography variant="body2"  color="text.secondary"  >
              Respuesta emocional: miedo – agresividad.
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions className='card-area-actions' >
        <Button style={{ width: '80%' }} variant="contained" color="green" size="small">Actividad</Button>

      </CardActions>
    </Card>
  );
}