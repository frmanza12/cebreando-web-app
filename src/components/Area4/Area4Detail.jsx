import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';
import amigdala from '../../assets/amigdala.png'
import temporal from '../../assets/TemporalLobe.png'
import limbicSystem from '../../assets/SistemLimbic.png'
import { useNavigate } from "react-router-dom";

export default function Area4Detail() {
  const navigate = useNavigate();
  return (
    <Carousel className='carousel-area1' interval={null} controls={false}  >
      <Carousel.Item>
        <Card sx={{
          borderLeft: '5px solid #9cd27d', marginBottom: '20px',
          paddingBottom: '10px'
        }} className='card-area'>
          <img
            className='img-brain'
            src={temporal}
            alt="Prefrontal Cortex"
          />
          <CardContent
            className='card-area-content'
          >

            <Typography gutterBottom variant="h5" component="div">
              TEMPORAL
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
                      Hipocampo <span style={{ fontStyle: 'italic' }}>“Caballito de Mar”</span>. Memoria.
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
                <Typography variant="body2" color="text.secondary"  >
                  Conductas complejas de aprendizaje y motivación.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Respuesta emocional: miedo – agresividad.
                </Typography>
              </li>


            </ul>
          </CardContent>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card sx={{
          borderLeft: '5px solid #9cd27d', marginBottom: '20px',
          paddingBottom: '10px'
        }} className='card-area'>
          <img
            className='img-brain'
            src={amigdala}
            alt="Prefrontal Cortex"
          />
          <CardContent
            className='card-area-content'
          >
            <Typography marginBottom={'5px'} color="text.secondary">
              La <strong>amígdala</strong> referida a conductas complejas de aprendizaje y motivación.
              Respuesta emocional:  miedo – agresividad.

            </Typography>
          </CardContent>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card sx={{
          borderLeft: '5px solid #9cd27d', marginBottom: '20px',
          paddingBottom: '10px'
        }} className='card-area'>
          <img
            className='img-brain'
            src={limbicSystem}
            alt="Prefrontal Cortex"
          />
          <CardContent
            className='card-area-content'
          >
            <Typography marginBottom={'5px'} color="text.secondary">
              El <strong>hipocampo</strong> es una parte del cerebro ubicada en el
              lóbulo temporal, esencial
              para la formación de
              recuerdos, la orientación
              espacial y la regulación
              emocional. Lesiones en esta
              región pueden causar
              problemas de memoria y
              emocionales.
            </Typography>
          </CardContent>
          <CardActions className='card-area-actions' >
            <Button
              onClick={() => navigate('/activity/hipocampo')}
              style={{ width: '80%' }} variant="contained" color="green" size="small">Actividad</Button>

          </CardActions>
        </Card>
      </Carousel.Item>




    </Carousel >
  );
}