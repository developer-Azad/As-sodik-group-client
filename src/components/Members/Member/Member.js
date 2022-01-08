import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Member.css'

const Member = (props) => {
    const {memberId, img, name} = props.member;
    const navigate = useNavigate();
   

    const handleMyHisab = () => {
        navigate(`/updateHisab/${memberId}`);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <Card >
      <CardHeader
    
        title={name}
        subheader={memberId}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          description
        </Typography>
      </CardContent>
      <button className="d-btn">Details</button>
            <button className="h-btn" onClick={handleMyHisab}>My Hisab</button>
    </Card>
    </Grid>
    );
};

export default Member;