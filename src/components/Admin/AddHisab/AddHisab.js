import { Container, Grid, Item } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import MemberHisab from '../../Members/MemberHisab/MemberHisab';
import './AddHisab.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddHisab = () => {
  const memberId = useParams();

  const { register, handleSubmit, reset } = useForm();
  const [allChanda, setAllChanda] = useState([]);


  useEffect( () => {
    const url = `http://localhost:5000/deposits`;
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

  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/deposits', data)
    .then(res => {
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
    })
  }

    

    return (
        <Container sx={{marginTop: '30px'}}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} >
          <div className="chanda-form">
            <h2 className="">Add New Deposite</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("memberId", { required: true})} placeholder="Member Id"/>
      <br />
      <input {...register("month", { required: true, maxLength: 50 })} placeholder="Month name"/>
      <br />
      <input {...register("amount", { required: true})} placeholder="Amount"/>
      <br />
      <input {...register("date", { required: true})} placeholder="Date"/>
      <br />
      <input {...register("dpoint", { required: true})} placeholder="Deposite point"/>
      <br />
     
      <input className="submit-btn" type="submit" />
    </form>
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

          
            
            <h1>My Hisab</h1>
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
export default AddHisab;