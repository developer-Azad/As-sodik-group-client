import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const DashboardHome = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const url = 'https://vast-falls-30243.herokuapp.com/members';
    fetch(url)
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [])
  
  const handleRemove = id => {
    const url = `https://vast-falls-30243.herokuapp.com/members/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          alert('deleted member')
          const restCustomers = members.filter(customer => customer._id !== id);
          setMembers(restCustomers);
          window.location.reload();
        }
      })
  }
// members serial
  const onlyMembers = members.filter(member => member.status === "member");
  onlyMembers.sort((a, b) => parseInt(a.memberId) - parseInt(b.memberId));
// total amount
 

  return (
    <Container>
      <Table sx={{}} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Village</TableCell>
            <TableCell>PostOffice</TableCell>
            <TableCell>Upazila</TableCell>
            <TableCell>District</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Remove</TableCell>
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
              <TableCell component="th" scope="row"><button style={{ color: `red` }} onClick={() => handleRemove(row._id)}>delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};


export default DashboardHome;