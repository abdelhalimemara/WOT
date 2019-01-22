import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const BestenListe = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(rank, name, date, score, gym) {
  id += 1;
  return { id, rank, name, date, score, gym };
}

const rows = [
  createData(1,'Omar Mohamed', '22.01.2019', 216.0, 'CrossZone'),
  createData(2,'Abdelhalim Emara', '22.01.2019', 200.5, 'CrossZone'),
  createData(3,'Matthias Aigner', '22.01.2019', 200.0, 'CrossZone'),
  createData(4,'Oliver Binder', '22.01.2019', 180.0, 'CrossZone'),
  createData(5,'Tim Ahrens', '22.01.2019', 175.0, 'CrossZone'),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <BestenListe># Rank</BestenListe>
            <BestenListe align="center">Name</BestenListe>
            <BestenListe align="center">Date</BestenListe>
            <BestenListe align="center">Score</BestenListe>
            <BestenListe align="center">Gym</BestenListe>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <BestenListe component="th" scope="row">
                {row.rank}
              </BestenListe>
              <BestenListe align="center">{row.name}</BestenListe>
              <BestenListe align="center">{row.date}</BestenListe>
              <BestenListe align="center">{row.score}</BestenListe>
              <BestenListe align="center">{row.gym}</BestenListe>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
