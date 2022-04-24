import {
  makeStyles, FormControl, Select, MenuItem, ListItemText,
} from '@material-ui/core';

import React from 'react';
import CustomCheckbox from './CustomCheckbox';

const useStyles = makeStyles(() => ({
  selectField: {
    width: '350px',
    marginRight: '5px',
  },
  listItem: {
    marginLeft: '10px',
  },
  selectList: {
    '&.Mui-selected': {
      backgroundColor: 'transparent',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export default function MultiSelect({ options, value, setValue }) {
  const classes = useStyles();

  const handleChange = (event) => {
    const newList = event.target.value;
    if (newList.includes('Select all')) {
      setValue(options);
    } else {
      setValue(newList);
    }
  };

  const displaySelection = (selected) => {
    let display = selected.join(', ');
    if (selected.length === options.length) {
      display = 'Select all';
    }
    return display;
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.selectField}>
        <Select
          labelId="status"
          id="status"
          value={value}
          onChange={handleChange}
          renderValue={displaySelection}
          multiple
        >
          <MenuItem value="Select all" className={classes.selectList}>
            Select all
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option} className={classes.selectList}>
              <CustomCheckbox isChecked={value.indexOf(option) > -1} />
              <ListItemText className={classes.listItem} primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
