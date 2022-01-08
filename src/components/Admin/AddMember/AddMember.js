import { Container } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddMember = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/members', data)
    .then(res => {
        if(res.data.insertedId){
            alert('added successfully');
            reset();

        }
    })
  }

    return (
        <Container>
            <div className="service-form">
            <h2 className="text-4xl font-bold text-danger">Add service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("memberId", { required: true})} placeholder="Member Id"/>
      <br />
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name"/>
      <br />
      <input {...register("mobile", { required: true})} placeholder="Mobile Number"/>
      <br />
      <input {...register("admitDate", { required: true})} placeholder="Admit Date"/>
      <br />
      <input {...register("village", { required: true})} placeholder="Village"/>
      <br />
      <input {...register("post", { required: true})} placeholder="Post"/>
      <br />
      <input {...register("upazila", { required: true})} placeholder="Upazila"/>
      <br />
      <input {...register("district", { required: true})} placeholder="District"/>
      <br />
      <input {...register("nid", { required: true})} placeholder="Nid Dumber"/>
      <br />
      <input type="text" {...register("img", { required: false })} placeholder="Image url"/>
      <br />
      <input className="confirm-btn submit-field" type="submit" />
    </form>
            </div>
        </Container>
    );
};
export default AddMember;