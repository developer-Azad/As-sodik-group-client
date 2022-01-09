import { Container, Grid, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MemberHisab.css'

const MemberHisab = (props) => {
    const {month, amount, date, dpoint} = props.hisab;
    

    return (
  <Grid  item xs={6} sm={6} md={4} lg={3} >
   <div className='hisab'>
   <h3>{month}</h3>
   <h4>{date}</h4>
   <h2>{amount}</h2>
   <Rating name="half-rating-read" defaultValue={dpoint} precision={0.5} readOnly />
   </div>
  </Grid>
  
    );
};

export default MemberHisab;