import {Container, Grid, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MemberDetails.css'

const MemberDetails = () => {
    const memberId = useParams();
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();
   
    const handleMyHisab = () => {
        navigate(`/hisab/${memberId.memberId}`);
    }

    useEffect( () => {
        const url = 'http://localhost:5000/members';
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

 //member delete operation
 const handleRemove = memberId => {
  const url = `http://localhost:5000/members/${memberId}`;
  fetch(url, {
      method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
      if(data.deletedCount) {
          alert('deleted order')
          // const restOrder = orders.filter(member => member.memberId !== id);
          // setOrders(restOrder);
          window.location.reload();
      }
      
  })
}

    
    return (
        <Container>
            <h1>Member Details</h1>
             <Grid container spacing={3}>
             <Grid item xs={12} sm={12} md={6} lg={8} >
              <div className='details'>
              <h2>Member Id : {memberDetail?.memberId}</h2>
              <h1 className='member-name'>{memberDetail?.name}</h1>
              <h4>Village : {memberDetail?.village}</h4>
              <h4>Post : {memberDetail?.post}</h4>
              <h4>Upazila : {memberDetail?.upazila}</h4>
              <h4>District : {memberDetail?.district}</h4>
              <h4>Admit Date : {memberDetail?.admitDate}</h4>
              <Rating name="half-rating-read" defaultValue={avgPoint} precision={0.5} readOnly />
              <br />
              {/* <button className="btn bg-color" onClick={handleMyHisab}>My Hisab</button> */}
              </div>
          </Grid>
           <Grid item xs={12} sm={12} md={6} lg={4} >
             <div >
                 <img className='details-img' src={memberDetail?.img} alt="" />
             </div>
          </Grid>
          </Grid>
        </Container>
    );
};

export default MemberDetails;