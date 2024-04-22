
import { useState } from 'react';
import { Grid } from '@mui/material';
import brain from '../../assets/completeBrain.png'
import Grow from '@mui/material/Grow';
import Detail from '../Detail';
import '../styles.css'

import { BRAIN_PARTS } from '../../constants/brainsParts';

const Brain = () => {
    const [part, setPart] = useState();
    const [show, setShow] = useState(false);

    const handleClick = (event) => {
        setShow(false);
        setTimeout(() => {
            setPart(event);
        }, 200);

        setTimeout(() => {
            setShow(true);
            let element = document.querySelector('.card-area');
            element.scrollIntoView({ behavior: 'smooth' });

        }, 400);
       
    };


    return (
        <Grid container direction={'column'}>
            <Grid item className='grid'>
                <img src={brain} alt="Brain" className='main-brain' useMap="#image-map" />
                <map name="image-map">
                    <area onClick={() => handleClick(0)} coords="59,108,83,79,135,64,122,104,117,127,90,138,64,152,50,126" shape="poly" />
                    <area onClick={() => handleClick(1)} coords="144,96,182,68,224,90,224,106,171,119,150,125" shape="poly" />
                    <area onClick={() => handleClick(2)} coords="235,120,250,107,261,157,242,176,235,174,240,144" shape="poly" />
                    <area onClick={() => handleClick(3)} coords="125,184,161,172,229,160,211,125,149,141,120,147,107,165,117,177" shape="poly" />
                    <area onClick={() => handleClick(4)} coords="143,191,224,178,229,202,192,232,176,233" shape="poly" />
                </map>
            </Grid>

            <Grid item style={{ maxWidth: '100%', flexDirection: 'column' }}>

                {/* Conditionally applies the timeout prop to change the entry speed. */}
                {
                    part !== undefined && (
                        <Grow in={show}>
                            <Grid item className='grid'>
                                <Detail Component={BRAIN_PARTS[part]} />
                            </Grid>
                        </Grow>
                    )
                }
            </Grid>
        </Grid>

    );
};

export default Brain;