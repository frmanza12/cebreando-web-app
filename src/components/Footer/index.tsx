//create a footer component
import React from 'react';
import { Grid } from '@mui/material';

import logoUma from '../../assets/LogoUMA.jpg'
import logoLab from '../../assets/LogoLab.jpg'

const Footer = () => {
  return (
    <footer
        style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
          
            width:'100%',
            }}
    >
        <Grid  style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            alignSelf:'center',
            marginTop:'20px',
            width:'360px',
            }}>
            <Grid item>
                <img src={logoLab} alt='logoLab' style={{width:'70%'}}/>
                <img src={logoUma} alt='logoUma' style={{width:'30%'}}/>
            </Grid>
            
        </Grid>
    </footer>
  );
};

export default Footer;