import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';
import prefrontal from '../../assets/PrefrontalCortex.png'
import cingulate from '../../assets/CingulateGyrus.png'
export default function Area1Detail() {
 
  return (
    <Carousel className='carousel-area1'
    interval={null}
    controls={false}
    
    >

      <Carousel.Item>
        <Card className='card-area' 
        sx={{borderLeft: '5px solid #99b5df', marginBottom: '30px'}}>
          <img
            className='img-brain'
            src={prefrontal}
            alt="Prefrontal Cortex"
          />
          <CardContent
          className='card-area-content'
          >

            <Typography gutterBottom variant="h5" component="div">
              Corteza Prefrontal
            </Typography>
            <Typography color="text.secondary" fontWeight={'bold'}>
              ¿Corteza qué? ¿Lóbulo? ¿Dorsolateral – Orbitofrontal?
              ¿Qué es esto?
            </Typography>
            <Typography marginTop={'5px'} variant="body2" fontStyle={'italic'} color="text.secondary"  >
              Estos términos hacen referencia a una estructura cerebral situada en la zona anterior del cerebro y tiene como funciones principales:
            </Typography>
            <ul>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Lenguaje: <strong>Producción</strong>
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Respuesta atencional
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Planificación.<strong> Dorsolateral</strong>

                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Procesamiento. <strong>Dorsolateral</strong>

                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Flexibilidad cognitiva.<strong> Orbitofrontal</strong>
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Regulación afectiva: control de impulsos – inhibición de respuestas. <strong>Orbitofrontal</strong>
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions
            className='card-area-actions' 
          >
            <Button style={{width:'80%'}} color="primaryBlue" variant="contained" size="small">Actividad</Button>

          </CardActions>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className='card-area' sx={{borderLeft: '5px solid #99b5df', marginBottom: '30px'}}>
          <img
           className='img-brain'
            src={cingulate}
            alt="cingulate"
          />
          <CardContent
          className='card-area-content'
          >

            <Typography gutterBottom variant="h5" component="div">
              Corteza Cingulada Anterior (CCA)
            </Typography>

            <ul>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  <strong>Cognición	Emoción </strong> (por su situación, entre la corteza cerebral – cognición – y el sistema límbico – emoción-)
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Flexibilidad y control cognitivo.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Toma de decisiones.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontStyle={'italic'} color="text.secondary"  >
                  Memoria de Trabajo.
                </Typography>
              </li>

            </ul>
          </CardContent>
          <CardActions className='card-area-actions' >
            <Button style={{width:'80%'}} color="primaryBlue" variant="contained" size="small">Actividad</Button>

          </CardActions>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}