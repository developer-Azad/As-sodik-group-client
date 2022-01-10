import { Grid } from '@mui/material';
import React from 'react';
import image from '../../images/cover2.png';
import './Banner.css'

const Banner = () => {
    return (
       <div className='banner-bg'>
            <Grid  container spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={9} >
          <div className='name'>
                <h1 >AS-SODIK GROUP</h1>
                <h3>Dhaka, Bangladesh</h3>
                </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} >
              <div className='total'>
              <h2>Total Deposited Amount</h2>
              <h1>${}</h1>
              </div>
              <div className='total'>
              <h3>Last Deposited Amount</h3>
              <h3>${}</h3>
              </div>
          </Grid>
          </Grid>
       </div>
    );
};

export default Banner;