import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  image: {
    height: '400px',
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            onClick={props.onClose}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.photo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              component="p"
            >
              Pretty Doggo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
