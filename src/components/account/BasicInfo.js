import React from 'react';

import { Button, Typography } from '@material-ui/core';
import SimpleBar from '../ui/SimpleBar';
import AlignedText from '../ui/AlignedText';

export default function BasicInfo(props) {
  return (
    <div>
      <SimpleBar
        title="Basic Information"
        buttons={(
          <>
            <Button onClick={() => props.handleEdit()}>Edit</Button>
          </>
        )}
      >
        <>
          <AlignedText text="Username" childrenType="text">
            <Typography variant="body1">{props.username}</Typography>
          </AlignedText>
          <AlignedText text="Full name" childrenType="text">
            <Typography variant="body1">{props.fullName}</Typography>
          </AlignedText>
          <AlignedText text="Email" childrenType="text">
            <Typography variant="body1">{props.email}</Typography>
          </AlignedText>
        </>
      </SimpleBar>
    </div>
  );
}
