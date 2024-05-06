import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';
import Typography from '@mui/material/Typography';
import parietal from '../../assets/ParietalLobe.png'
import somatosensory from '../../assets/Somatosensory.png'
export default function Area2Detail() {
  return (

    <Carousel className='carousel-area1'
      interval={null}
      controls={false}
    >
      <Carousel.Item>
        <Card sx={{
          borderLeft: '5px solid #77d5d3', marginBottom: '20px',
          paddingBottom: '10px'
        }} className='card-area'>
          <img
            className='img-brain'
            src={parietal}
            alt="Prefrontal Cortex"
          />
          <CardContent className='card-area-content'>
            <Typography gutterBottom variant="h5" component="div">
              PARIENTAL
            </Typography>
            <Typography marginBottom={'5px'} v fontStyle={'italic'} variant="body2" color="text.secondary">
              ¿Nunca había oído esta palabra, a qué se refiere? Es un área cerebral situada seguida del lóbulo frontal y entre sus acciones están:
            </Typography>
            <ul>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Praxias
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Procesamiento sensorial. Orientación espacial
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Procesamiento información simbólica: Uso del lenguaje
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Procesamiento información numérica: Operaciones matemáticas. Pensamiento abstracto
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  “Síndrome de Gerstmann”
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions className='card-area-actions' >
            <Button style={{ width: '80%' }} variant="contained" color="primaryAqua" size="small">Actividad</Button>

          </CardActions>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card sx={{ borderLeft: '5px solid #77d5d3', marginBottom: '30px' }} className='card-area'>
          <img
            className='img-brain'
            src={somatosensory}
            alt="Prefrontal Cortex"
          />
          <CardContent className='card-area-content'>
            <Typography gutterBottom variant="h5" component="div">
              CORTEZA SOMATOSENSORIAL
            </Typography>
            <Typography marginBottom={'5px'} variant="body2" color="text.secondary">
              La corteza somatosensorial es una región del cerebro
              que se encuentra en los lóbulos parietal y frontal.
            </Typography>
            <ul>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Su función principal es procesar la información
                  sensorial proveniente de diferentes partes del cuerpo,
                  como el tacto, la presión, la temperatura y el dolor.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Esta información se organiza de manera topográfica, lo
                  que significa que diferentes áreas de la corteza
                  somatosensorial corresponden a diferentes partes del
                  cuerpo.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Por ejemplo, la parte de la corteza somatosensorial que
                  representa la mano estará próxima a la parte que
                  representa el brazo.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  Esta organización permite al cerebro interpretar y
                  responder adecuadamente a estímulos sensoriales
                  específicos.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary"  >
                  La corteza somatosensorial también desempeña un
                  papel en la percepción de la posición y el movimiento
                  del cuerpo, conocida como propriocepción.
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions className='card-area-actions' >
            <Button style={{ width: '80%' }} variant="contained" color="primaryAqua" size="small">Actividad</Button>

          </CardActions>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}