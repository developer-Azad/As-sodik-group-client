import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';


const AddMember = () => {
    const { register, handleSubmit, reset } = useForm();
    const [member, setMember] = useState([]);
    //new member Id for admit form
    const [newId, setNewId] = useState();
    

    useEffect( () => {
      const url = `http://localhost:5000/members`;
      fetch(url)
      .then(res => res.json())
      .then(data => setMember(data))
  }, [])

   // members filtering
   const onlyMembers = member.filter(member => member.status === "member");
   onlyMembers.sort((a, b) => parseInt(a.memberId) - parseInt(b.memberId));

   // largest memberId
   const getId = onlyMembers.map(id => Number(id.memberId));
   let currentId = Math.max(...getId);   
  // new memberId
    useEffect(() => {
    setNewId(currentId+1); // Set value into the input field
  }, [currentId]); // Runs whenever nextId changes

   
//------------------------****---------------------------------
  // new members information data input
  const onSubmit = data => {
    axios.post('http://localhost:5000/members/', data)
    .then(res => {
        if(res.data.insertedId){
            alert('added successfully');
            reset();
            // window.location.reload()
        }
    })
  }

 

  // const onSubmit = id => {
  //   const inputId = id.memberId;
  //   const url = `http://localhost:5000/members/${inputId}`;
  //   fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(id)
  //   })
  //     .then(res => {console.log(res)
  //       if (res.data) {
  //         alert('Added member')
  //         reset();
  //       }
  //   })
  // }

  // const onSubmit = data => {
  //   // alert('Admin added successfully.')
  //     fetch('http://localhost:5000/users/admin', {
  //       method: 'PUT',
  //       headers: {
  //           'content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //   })
  //   reset();
  // }
 

    return (
        <Container>
            <div className="chanda-form" style={{marginTop: '3%'}}>
            <h2 className="text-4xl font-bold">Add A New Member</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("memberId", { required: true})} value={newId} placeholder="Member Id"/>
      <br />
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name"/>
      <br />
      <input type="number" {...register("mobile", { required: true})} placeholder="Mobile Number"/>
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
      <input type="number" {...register("nid", { required: true})} placeholder="Nid Dumber"/>
      <br />
      <input {...register("status", { required: true})} placeholder="status: member"/>
      <br />
      <input type="text" {...register("img", { required: true })} placeholder="Image url"/>
      <br />
      <label>Gender Selection </label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
        </select>
        <br />
      <input className="confirm-btn submit-field" style={{width: "40%"}} type="submit" />
    </form>
            </div>
        </Container>
    );
};
export default AddMember;