import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import image from '../../images/cover2.png';
import './Banner.css'

const Banner = () => {
    const [allChanda, setAllChanda] = useState([]);


  useEffect( () => {
    const url = `https://vast-falls-30243.herokuapp.com/members`;
    fetch(url)
    .then(res => res.json())
    .then(data => setAllChanda(data))
}, [])

const memberHisab2 = allChanda.filter(chada => chada.amount > 0);
const totalHisab = memberHisab2.map(allHisab => allHisab.amount);

let totalAmount = 0;
for(let i = 0; i < totalHisab.length; i++){
  totalAmount = parseInt(totalAmount) + parseInt(totalHisab[i]);
}
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
              <h1>{totalAmount}/-</h1>
              </div>
              <div className='total'>
              <h3>Last Deposited Amount</h3>
              <h3>{}/-</h3>
              </div>
          </Grid>
          </Grid>
       </div>
    );
};

export default Banner;