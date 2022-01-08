import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect( () => {
        const url = 'http://localhost:5000/members';
        fetch(url)
        .then(res => res.json())
        .then(data => setMembers(data))
    }, [])
    return (
       <Container>
            <h1>members</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
            {
                members.map(member => <Member
                key={member.id}
                member={member}
                >
                </Member>)
            }
        </Grid>
       </Container>
    );
};

export default Members;