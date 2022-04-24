import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  progress: {
    position: 'absolute',
    top: '41vh',
    left: '47%',
    // transform: 'translate(-50%, 0)',
  },
}));

function GeneralLoading() {
  const classNames = useStyles();
  return <CircularProgress color="inherit" size={30} className={classNames.progress} />;
}

export default GeneralLoading;
