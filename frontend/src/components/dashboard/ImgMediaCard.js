import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PlaceholderImage from './images/paint.jpg';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 345,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

export default function ImgMediaCard({name, link}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={link} className={classes.link}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="artwork"
            height="200"
            image={PlaceholderImage}
            title="Artwork"
          />
          <CardContent className ={classes.name}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
