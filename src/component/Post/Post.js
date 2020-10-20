import React, { useEffect, useState }  from 'react';
import './Post.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Post = () => {

  const classes = useStyles();
    return (
      <Card className={classes.root} className="Card-container">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           COMMENT: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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

export default Post;