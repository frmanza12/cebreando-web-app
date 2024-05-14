
import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import brain from '../../assets/completeBrain.png'
import Grow from '@mui/material/Grow';
import Detail from '../Detail';
import Footer from '../Footer';
import '../styles.css'

import { BRAIN_PARTS } from '../../constants/brainsParts';

const Brain = () => {
    const [part, setPart] = useState();
    const [show, setShow] = useState(false);
    const { state } = useLocation();
    const id = state && state.id;

    const handleClick = (event) => {
        setShow(false);
        setTimeout(() => {
            setPart(event);
        }, 200);

        setTimeout(() => {
            setShow(true);


        }, 400);

    };

    useEffect(() => {
        if (id !== undefined) {
            setPart(id);
            setShow(true);
        }
    }
        , [id]);

    const getColor = () => {
        switch (part) {
            case 0:
                return '#99b5df';
            case 1:
                return '#77d5d3';
            case 2:
                return '#d8be6a';
            case 3:
                return '#9cd27d';
            case 4:
                return '#ad5151';
            default:
                return '#000000';
        }
    }

    return (
        <>
            <Grid container direction={'column'}>
                <Typography
                    variant="h3"
                    className='title'
                    style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginTop: '20px',
                        fontWeight: 'bold',
                        color: getColor()

                    }}
                >
                    CEREBRANDO
                </Typography>
                <Grid item className='grid'>

                    <img src={brain} alt="Brain" className='main-brain' useMap="#image-map" />
                    <map name="image-map">
                        <area onClick={() => handleClick(0)} coords="84,137,50,132,35,95,43,64,81,40,117,33,167,21,132,57,124,96,125,100,127,108" shape="poly" />
                        <area onClick={() => handleClick(1)} coords="133,63,152,46,182,22,221,42,235,56,252,76,239,92,207,82,188,97,132,102" shape="poly" />
                        <area onClick={() => handleClick(2)} coords="245,98,244,86,257,80,268,114,268,136,257,154,245,158,249,125" shape="poly" />
                        <area onClick={() => handleClick(3)} coords="82,157,88,132,123,112,164,108,194,106,210,85,240,103,239,141,237,150,189,157,155,162,121,173,101,168" shape="poly" />
                        <area onClick={() => handleClick(4)} coords="138,171,175,164,238,158,240,187,211,199,194,208,198,224,193,230,170,199" shape="poly" />
                    </map>
                </Grid>

                <Grid item style={{ maxWidth: '100%', flexDirection: 'column' }}>

                    {/* Conditionally applies the timeout prop to change the entry speed. */}
                    {
                        part != null && (
                            <Grow in={show}>
                                <Grid item className='grid'>
                                    <Detail Component={BRAIN_PARTS[part]} />
                                </Grid>
                            </Grow>
                        )
                    }
                </Grid>
                <Footer />
            </Grid>
            
        </>

    );
};

export default Brain;