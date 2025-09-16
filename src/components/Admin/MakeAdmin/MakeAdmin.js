import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    // alert('Admin added successfully.')
      fetch('http://localhost:5000/users/admin', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    reset();
  }

    return (
        <div className="chanda-form">
            <h2>Make an new Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
   
      <input {...register("email", { required: true, maxLength: 50 })} placeholder="Your email"/>
      <br />
      <input  style={{width:'10%'}} type="submit" />
    </form>
        </div>
    );
};
export default MakeAdmin;