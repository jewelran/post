import React from 'react';
import './User.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import PostDetail from '../PostDetail/PostDetail';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const User = (props) => {
   const {id, title,body} =  props.users
const classes = useStyles();
    return (
        // <div>
        //     <h3>Name: {name}</h3>
        //     <h3>id:{id}</h3>
        //     <h1>hi i am jewel rana</h1>
        // </div>
        <Card className={classes.root} className="Card-container">
        <CardActionArea>
          <CardMedia
          
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="h2">
            <h3>id:{id}</h3>
            <h4>Title: {title}</h4>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <h4>Comments: {body}</h4>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="secondary">
            Details
          </Button>
          <Link to="/post"> <Button variant="contained" color="primary">
            Learn More
          </Button></Link>
         
        </CardActions>

       
      </Card>
    );
};

export default User;