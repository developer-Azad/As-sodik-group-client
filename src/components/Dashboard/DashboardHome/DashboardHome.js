import { Box, Button, Container, Modal, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DashboardHome = () => {

  const [member, setMember] = useState([]);
  const [mongodbId, setMongodbId] = useState();
  const [allChanda, setAllChanda] = useState([]);
 
  
  

  //Modal
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const url = 'http://localhost:5000/members';
    fetch(url)
      .then(res => res.json())
      .then(data => setMember(data))
  }, [])


  const handleOpen = id => {
    setMongodbId(id);
    setOpen(true);
    return id;
  }

  const handleEdit = id => {

    alert('edited member');
  }

  const handleRemove = id => {
    const url = `http://localhost:5000/members/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          alert('deleted member')
          const restMembers = member.filter(customer => customer._id !== id);
          setMember(restMembers);
          window.location.reload();
        }
      })
  }

// members serial
  const onlyMembers = member.filter(member => member.status === "member");
  onlyMembers.sort((a, b) => parseInt(a.memberId) - parseInt(b.memberId));


// total amount

 useEffect( () => {
    const url = `http://localhost:5000/members`;
    fetch(url)
    .then(res => res.json())
    .then(data => setAllChanda(data))
}, [])
const membersHisab = member.filter(member => member.status !== "member");
// const singleHisab = membersHisab.find(memberHisab => memberHisab.memberId ===);
// const memberHisab = allChanda.filter(chanda => chanda.memberId === memberId.memberId);
// console.log(singleHisab);
// const membersDetail = members.find(memberDetail => memberDetail.memberId === row.memberId);



  return (
    <Container>
      <Table sx={{}} aria-label="Members table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: '700'}}>Id</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Name</TableCell>
            <TableCell style={{ fontWeight: '700'}}>Mobile</TableCell>
            <TableCell style={{ fontWeight: '700' }}>Village</TableCell>
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
          {onlyMembers.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.memberId}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell component="th" scope="row">{row.mobile}</TableCell>
              <TableCell component="th" scope="row">{row.village}</TableCell>
              <TableCell component="th" scope="row">{row.post}</TableCell>
              <TableCell component="th" scope="row">{row.upazila}</TableCell>
              <TableCell component="th" scope="row">{row.district}</TableCell>
              <TableCell component="th" scope="row">{}</TableCell>
              <TableCell component="th" scope="row">{}</TableCell>
              <TableCell component="th" scope="row"><button style={{ color: `red` }} onClick={() => handleEdit(row._id)}>Edit</button></TableCell>
              <TableCell component="th" scope="row"><button style={{ color: `red` }} onClick={() => handleOpen(row._id)}>delete</button>
            {/* </TableRow>
          ))}
        </TableBody>
      </Table> */}
      {/*-------------------------Modal------------------------*/}
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Once you delete it, this member will be permanently deleted from the database.
          </Typography>
          <div style={{display:'flex'}}>
            <Link to="/dashboard">
              <Button style={{marginTop:'20px', }} variant="outlined" color="primary">Back</Button>
            </Link>
            <Button style={{marginTop:'20px', marginLeft:'55%'}} onClick={() => handleRemove(mongodbId)} variant="outlined" color="error">Confirm</Button>
          </div>
        </Box>
      </Modal>
      </div>
      </TableCell>
      </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>   
    
  );
};


export default DashboardHome;