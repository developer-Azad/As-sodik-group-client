import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect( () => {
        const url = 'https://vast-falls-30243.herokuapp.com/members';
        fetch(url)
        .then(res => res.json())
        .then(data => setMembers(data))
    }, [])


    const onlyMembers = members.filter(member => member.status === "member");
    onlyMembers.sort((a, b) => parseInt(a.memberId) - parseInt(b.memberId));
    // onlyMembers.reverse();
    
    return (
       <Container>
            <h1 className='title'>Our Honourable Members : {onlyMembers.length}</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
            {
                onlyMembers.map(member => <Member
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