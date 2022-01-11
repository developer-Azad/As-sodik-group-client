import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
      fetch('https://vast-falls-30243.herokuapp.com/users/admin', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    reset();
  }

    return (
        <div className="service-form">
            <h2>Make an Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
   
      <input {...register("email", { required: true, maxLength: 50 })} placeholder="Your email"/>
      <br />
      <button  className="submit-btn"> <input type="submit" /></button>
    </form>
        </div>
    );
};
export default MakeAdmin;