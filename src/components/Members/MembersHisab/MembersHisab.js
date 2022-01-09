import { Container, Grid, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MemberHisab from '../MemberHisab/MemberHisab';

const MembersHisab = () => {
    const memberId = useParams();
    const [allChanda, setAllChanda] = useState([]);


  useEffect( () => {
    const url = `http://localhost:5000/members`;
    fetch(url)
    .then(res => res.json())
    .then(data => setAllChanda(data))
}, [])

const memberHisab = allChanda.filter(chanda => chanda.memberId === memberId.memberId);
const totalHisab = memberHisab.slice(1,memberHisab.length).map(allHisab => allHisab.amount);

let totalAmount = 0;
for(let i = 0; i < totalHisab.length; i++){
  totalAmount = parseInt(totalAmount) + parseInt(totalHisab[i]);
}

// total due
const totalDue = 13000 - totalAmount;

    return (
        <Container>
             <Grid container spacing={3}>
             <Grid item xs={12} sm={12} md={6} lg={6} >
              <div className='total'>
              <h2>Member Id : {}</h2>
              <h1>Name: {}</h1>
              <h3>Address : {}</h3>
              <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </div>
          </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} >
              <div className='total'>
              <h2>Total Deposited Amount</h2>
              <h1>{totalAmount}</h1>
              </div>
              <div className='totaldue'>
              <h3>Total Due Amount</h3>
              <h3>{totalDue}</h3>
              </div>
          </Grid>
          </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
        {
                memberHisab.slice(1,memberHisab.length).map(hisab => <MemberHisab
                key={hisab.month}
                hisab={hisab}
                ></MemberHisab>)
              }
        </Grid>
        </Container>
    );
};

export default MembersHisab;