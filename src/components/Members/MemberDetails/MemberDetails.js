import { Container, Grid, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MemberDetails.css'

const MemberDetails = () => {
    const memberId = useParams();
    const [members, setMembers] = useState([]);

    useEffect( () => {
        const url = 'https://vast-falls-30243.herokuapp.com/members';
        fetch(url)
        .then(res => res.json())
        .then(data => setMembers(data))
    }, [])

    const onlyMembers = members.filter(member => member.status === "member");
    const memberDetail = onlyMembers.find(memberDetail => memberDetail.memberId === memberId.memberId);

    const memberHisab = members.filter(chanda => chanda.memberId === memberId.memberId);
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

let avgPoint = totalPoint/allPoint.length;

// total due
const totalDue = 13000 - totalAmount;

    
    return (
        <Container>
             <Grid container spacing={3}>
             <Grid item xs={12} sm={12} md={6} lg={8} >
              <div className='details'>
              <h1 className='id'>Member Id : {memberDetail?.memberId}</h1>
              <h1>{memberDetail?.name}</h1>
              <h4>Village : {memberDetail?.village}</h4>
              <h4>post : {memberDetail?.post}</h4>
              <h4>Upazila : {memberDetail?.upazila}</h4>
              <h4>District : {memberDetail?.district}</h4>
              <h4>Admit Date : {memberDetail?.admitDate}</h4>
              
              <Rating name="half-rating-read" defaultValue={avgPoint} precision={0.5} readOnly />
              </div>
          </Grid>
           <Grid item xs={12} sm={12} md={6} lg={4} >
             <div>
                 <img src={memberDetail?.img} alt="" />
             </div>
          </Grid>
          </Grid>
            
        </Container>
    );
};

export default MemberDetails;