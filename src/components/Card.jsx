import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    width: 300,
    margin: 'auto',
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            image={props.item}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Dogge
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Here You can see dog pictures
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => props.onToggle(props.item)}
            size="small"
            color="primary"
          >
            Tap me
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
