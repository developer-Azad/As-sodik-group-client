import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MemberHisab.css'

const MemberHisab = () => {
    const {memberId} = useParams();
    console.log(memberId);
    const [membersHisab, setMembersHisab] = useState([]);

        useEffect(() => {
            fetch('/members.json')
            .then(res => res.json())
            .then(data => setMembersHisab(data))
        }, [])
    
    const hisab = membersHisab.find(memHisab => memHisab.id === memberId);

    const total = parseInt(hisab?.deposit?.jan?.p1) + parseInt(hisab?.deposit?.feb?.p1)




    return (
        <Container>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3}}>
  <Grid  item xs={6} sm={6} md={4} lg={3} >
   <div className='hisab'>
   <h3>January</h3>
   <h4>{hisab?.deposit?.jan?.d1}</h4>
   <h2>{hisab?.deposit?.jan?.p1}</h2>
   </div>
  </Grid>
  <Grid  item xs={6} sm={6} md={4} lg={3} >
   <div className='hisab'>
   <h3>February</h3>
   <h4>{hisab?.deposit?.feb?.d1}</h4>
   <h2>{hisab?.deposit?.feb?.p1}</h2>
   </div>
  </Grid>
  <Grid  item xs={6} sm={6} md={4} lg={3} >
   <div className='hisab'>
   <h3>Total</h3>
   
   <h2>{total}</h2>
   </div>
  </Grid>
  
</Grid>
        </Container>
    );
};

export default MemberHisab;