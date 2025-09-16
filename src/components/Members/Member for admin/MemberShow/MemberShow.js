import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Link, Rating, Typography } from '@mui/material';
import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Member.css'

const MemberShow = (props) => {

    const {memberId, img, name} = props.member;
    const navigate = useNavigate();
   
    const handleMyHisab = () => {
        navigate(`/hisab/${memberId}`);
    }
    const handleDetails = () => {
      navigate(`/details/${memberId}`);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <Card className="card-bg" style={{backgroundColor: 'rgb(255, 255, 250)'}}>
              <div className='card-btns'>
                <p className="card-header" style={{marginTop: '0px'}} >{memberId}</p>
                <p className="card-header" style={{marginLeft: '10px', marginTop: '0px', color: ''}}>{name}</p>
              </div>
              <CardMedia
                className='card-img'
                component="img"
                height="200px"
                image={img}
                alt="Paella dish"
                />
              <CardContent style={{padding: '5px'}}>
                {/* <Typography variant="body2" color="text.secondary"> */}
                  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                {/* </Typography> */}
              </CardContent>
              <div className='card-btns'>
                <button className='btn bg-color' onClick={handleDetails}>Details</button>
                <button className="btn bg-color" onClick={handleMyHisab}>Hisab</button>
              </div>
            </Card>
          </Grid>
        );
      };

export default MemberShow;