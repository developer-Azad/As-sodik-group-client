import { Container, Grid, Rating, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MemberHisab from '../MemberHisab/MemberHisab';
import DashboardHome from '../../Dashboard/DashboardHome/DashboardHome';

const MembersHisab = () => {
    const memberId = useParams();
    const [allChanda, setAllChanda] = useState([]);


  useEffect( () => {
    const url = `http://localhost:5000/members`;
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
            <Grid item xs={12} sm={12} md={6} lg={4} >
              <div className='totalAmount'>
              <h2 style={{margin: "0px"}}>Total Deposited Amount</h2>
              <h1 style={{margin: "0px"}}>{totalAmount}/-</h1>
              </div>
              <div className='totaldue'>
              <h3 style={{margin: "0px"}}>Total Due Amount</h3>
              <h3 style={{margin: "0px"}}>{totalDue}/-</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} >
              <div className='memberdetails'>
              <h2>Member Id : {member?.memberId}</h2>
              <h1>{member?.name}</h1>
              <h3>Avg Point : {avgPoint}</h3>
              <Rating name="half-rating-read" defaultValue={avgPoint} precision={0.5} readOnly />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} >
             <div >
                 <img className='hisabimg' src={member?.img} alt="" />
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
          <Grid>
      <Table sx={{}} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: '700'}}>Id</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Date</TableCell>
            <TableCell style={{fontWeight: '700'}}>Month</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Amount</TableCell>
            <TableCell style={{ fontWeight: '700' }}>PostOffice</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Upazila</TableCell>
            <TableCell style={{ fontWeight: '700' }}>District</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Total</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Due</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Edit</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberHisab.slice(1,memberHisab.length).map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.memberId}</TableCell>
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell component="th" scope="row">{row.month}</TableCell>
              <TableCell component="th" scope="row">{row.amount}</TableCell>
              <TableCell component="th" scope="row">{row.post}</TableCell>
              <TableCell component="th" scope="row">{row.upazila}</TableCell>
              <TableCell component="th" scope="row">{row.district}</TableCell>
              <TableCell component="th" scope="row">{}</TableCell>
              <TableCell component="th" scope="row">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </Grid>
        </Container>
    );
};

export default MembersHisab;