import React from 'react';
import { Typography } from '@material-ui/core';
// import { MdError } from 'react-icons/md';
import Icon from './icon/index';

export default function ErrorText({ children, className }) {
  return (
    children && (
      <div className={className} style={{ position: 'absolute', transform: 'translate(2px, 40px)' }}>
        <Icon.ErrorIcon style={{ fontSize: '0.9rem', transform: 'translate(0px, 1px)' }} />
        <Typography variant="body2">{children}</Typography>
      </div>
    )
  );
}
