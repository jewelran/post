import React from 'react';
import './User.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Link } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const User = (props) => {
   const {id, title,body,img} =  props.users

    return (
        // <div>
        //     <h3>Name: {name}</h3>
        //     <h3>id:{id}</h3>
        //     <h1>hi i am jewel rana</h1>
        // </div>
        <Card  className="Card-container">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <img className= "img" src={img} alt=""/>
            <h4>Title: {title}</h4>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <h4>Comments: {body}</h4>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link onClick= {() => props.datailHandle(id) } className="link" to ="/PostDetail">
          <Button variant="contained" color="secondary">
            learn more
          </Button>
          </Link>
          
         
         
        </CardActions>
      </Card>
    );
};

export default User;