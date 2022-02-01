import { Container, Grid, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MemberHisab from '../MemberHisab/MemberHisab';

const MembersHisab = () => {
    const memberId = useParams();
    const [allChanda, setAllChanda] = useState([]);


  useEffect( () => {
    const url = `https://vast-falls-30243.herokuapp.com/members`;
    fetch(url)
    .then(res => res.json())
    .then(data => setAllChanda(data))
}, [])

const onlyMembers = allChanda.filter(member => member.status === "member");
const member = onlyMembers.find(memberDetail => memberDetail.memberId === memberId.memberId);

const memberHisab = allChanda.filter(chanda => chanda.memberId === memberId.memberId);
      // memberHisab.sort((a, b) => parseInt(a.date) - parseInt(b.date));
const memberHisab2 = memberHisab.filter(chada => chada.amount > 0);
const totalHisab = memberHisab2.map(allHisab => allHisab.amount);
const allPoint = memberHisab2.map(allHisab => allHisab.dpoint);

let totalAmount = 0;
for(let i = 0; i < totalHisab.length; i++){
  totalAmount = parseInt(totalAmount) + parseInt(totalHisab[i]);
}

let totalPoint = 0;
for(let i = 0; i < allPoint.length; i++){
  totalPoint = parseInt(totalPoint) + parseInt(allPoint[i]);
}

const avgPoint = totalPoint/allPoint.length;

// total due
const totalDue = 13000 - totalAmount;

    return (
        <Container>
             <Grid container spacing={3}>
             <Grid item xs={12} sm={12} md={6} lg={8} >
              <div className='totalHisab'>
              <h2>Member Id : {member?.memberId}</h2>
              <h1>{member?.name}</h1>
              <h3>Address : {avgPoint}</h3>
              <Rating name="half-rating-read" defaultValue={avgPoint} precision={0.5} readOnly />
              </div>
          </Grid>
           <Grid item xs={12} sm={12} md={6} lg={4} >
              <div className='totalAmount'>
              <h2>Total Deposited Amount</h2>
              <h1>{totalAmount}/-</h1>
              </div>
              <div className='totaldue'>
              <h3>Total Due Amount</h3>
              <h3>{totalDue}/-</h3>
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