import {
  makeStyles,
  Checkbox,
} from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  icon: {
    borderRadius: 5,
    minWidth: 20,
    height: 20,
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'white',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
  },
  checkedIcon: {
    borderRadius: 5,
    minWidth: 20,
    height: 20,
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'white',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 18,
      height: 18,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath"
        + " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 "
        + "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='black'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
}));

export default function CustomCheckbox({
  isChecked,
}) {
  const classes = useStyles();
  const [itemChecked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <>
      <Checkbox
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        checked={itemChecked}
        icon={<span className={classes.icon} />}
      />
    </>
  );
}
