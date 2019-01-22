import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Body(props) {
  const { classes } = props;

  return (
    <div className="DashboardCards" >
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src="/static/images/cards/squat.jpg" />
          <h3>Squats</h3>
          <Typography>Textkasjhdnas.dna.sdnmasm,.dnaskbdhasbdj</Typography>
          <Button className={classes.button}>Learn More </Button> <Button className={classes.button}>Mark as Done </Button>

          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src="/static/images/cards/squat.jpg" />
          <h3>Squats</h3>
          <Typography>Textkasjhdnas.dna.sdnmasm,.dnaskbdhasbdj</Typography>
          <Button className={classes.button}>Learn More </Button> <Button className={classes.button}>Mark as Done </Button>

          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
      <Grid item xs>
        <Paper className={classes.paper}>
        <img className={classes.img} alt="complex" src="/static/images/cards/squat.jpg" />
        <h3>Squats</h3>
        <Typography>Textkasjhdnas.dna.sdnmasm,.dnaskbdhasbdj</Typography>
        <Button className={classes.button}>Learn More </Button> <Button className={classes.button}>Mark as Done </Button>

        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper}>
        <img className={classes.img} alt="complex" src="/static/images/cards/squat.jpg" />
        <h3>Squats</h3>
        <Typography>Textkasjhdnas.dna.sdnmasm,.dnaskbdhasbdj</Typography>
        <Button className={classes.button}>Learn More </Button> <Button className={classes.button}>Mark as Done </Button>

        </Paper>
      </Grid>
      </Grid>
    </div>
    </div>
  );
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);
