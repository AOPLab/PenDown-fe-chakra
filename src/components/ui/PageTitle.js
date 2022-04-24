import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: '50px',
    wordBreak: 'break-word',
  },
}));

export default function PageTitle({ text }) {
  const classes = useStyles();

  return (
    <Typography variant="h3" className={classes.title}>
      {text}
    </Typography>
  );
}
