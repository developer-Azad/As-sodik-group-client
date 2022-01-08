import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const AddHisab = () => {
  const {memberId} = useParams();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/members/${memberId}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0) {
          alert('Hisab Updated Successfully');
          window.location.reload();
        }
      })
      reset();
    }
  
      return (
          <div className="service-form">
              <h2>Monthly Chanda Hisab</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
    
        <input {...register("month", { required: true, maxLength: 50 })} placeholder="Month"/>
        <br />
        <input {...register("amount", { required: true, maxLength: 50 })} placeholder="amount"/>
        <br />
        <input {...register("date", { required: true, maxLength: 50 })} placeholder="date"/>
        <br />
        <button  className="submit-btn"> <input type="submit" /></button>
      </form>
          </div>
      );
  };
export default AddHisab;