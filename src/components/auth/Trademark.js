import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import '../../styles/auth.css';
import Icon from '../ui/icon';

const useStyles = makeStyles(() => ({
  trademark: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'fixed',
    left: '6vw',
    bottom: '10vh',
  },
  logo: {
    height: '120px',
    width: '120px',
    marginRight: '35px',
    transform: 'translate(0, 6px)',
  },
}));

export default function Trademark() {
  const [importantFunctionality, setImportantFunctionality] = useState(false);
  const classNames = useStyles();

  const onClickTrademark = () => {
    if (!importantFunctionality && Math.random() > 0.8) {
      setImportantFunctionality(true);
    } else setImportantFunctionality(false);
  };

  return (
    <div className={classNames.trademark}>
      <Icon.Logo className={classNames.logo} fill="#000" stroke="#000" />
      <div>
        <span
          style={{
            fontSize: '2.4rem',
            lineHeight: 57 / 48,
            fontFamily: 'Moon',
            letterSpacing: '2px',
          }}
        >
          {importantFunctionality ? 'RDOGS' : 'PDOGS'}
        </span>
        <span
          style={{
            fontSize: '2.4rem',
          }}
        >
          {' '}
        </span>
        <span
          className="auth-trademark-main"
          style={{
            fontSize: '2.4rem',
            lineHeight: 57 / 48,
            fontFamily: 'Moon',
            letterSpacing: '2px',
          }}
        >
          6
        </span>
        <Typography className="auth-trademark-caption" variant="body1" onClick={onClickTrademark}>
          Department of Information Management,
          <br />
          National Taiwan University
          <br />
          2021 All rights reserved.
        </Typography>
      </div>
    </div>
  );
}
