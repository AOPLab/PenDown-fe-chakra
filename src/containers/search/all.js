import React from 'react';

// import { makeStyles } from '@material-ui/core';
import { Spacer } from '@chakra-ui/react';

// import SideBar from '../../components/ui/sidebar/index';
import People from './people';
import Tags from './tags';
import Schools from './schools';
import Courses from './courses';
import Notes from './notes';
import Templates from './templates';

export default function All() {
  return (
    <>
      <People />
      <Spacer mt="-4" />
      <Tags />
      <Spacer mt="-4" />
      <Schools />
      <Spacer mt="-4" />
      <Courses />
      <Spacer mt="-4" />
      <Notes />
      <Spacer mt="-4" />
      <Templates />
    </>
  );
}
