import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    // verticalAlign: 'center',
  },
  textColorPrimary: {
    color: theme.palette.primary.main,
  },
  textColorSecondary: {
    color: theme.palette.secondary.main,
  },
  textColorDefault: {},
  alignedTextWrapper: {
    boxSizing: 'content-box',
    flexShrink: 0,
  },
  alignedTextWrapperMd: {
    width: '190px',
  },
  alignedTextWrapperLg: {
    width: '250px',
  },
  alignedText: {
    marginTop: '23px',
    marginBottom: '16px',
  },
  textAlignedText: {
    marginTop: '0px',
    marginBottom: '16px',
  },
  fieldAlignedText: {
    marginTop: '18px',
  },
  radioAlignedText: {
    marginBottom: '16px',
  },
  children: {
    padding: '0px',
    margin: '0px',
    wordBreak: 'break-word',
  },
  fieldBottomMargin: {
    marginBottom: '17px',
    display: 'flex',
    flexGrow: 1,
  },
  textMaxWidth: {
    maxWidth: '79%',
  },
}));

export default function AlignedText({
  text, children, maxWidth, textColor, childrenType,
}) {
  const classes = useStyles();
  const ref = useRef();
  const [textHeight, setTextHeight] = useState();

  useEffect(() => {
    if (childrenType === 'text' && ref.current.clientHeight > 41) {
      setTextHeight(ref.current.clientHeight);
    }
  }, [childrenType, ref]);

  const textWrapperWidth = (type) => {
    switch (type) {
      case 'lg': {
        return classes.alignedTextWrapperLg;
      }
      case 'md': {
        return classes.alignedTextWrapperMd;
      }
      default: {
        return classes.alignedTextWrapperMd;
      }
    }
  };
  const textColorSelect = (color) => {
    switch (color) {
      case 'primary': {
        return classes.textColorPrimary;
      }
      case 'secondary': {
        return classes.textColorSecondary;
      }
      default: {
        return classes.textColorDefault;
      }
    }
  };
  const textTopMargin = (type) => {
    switch (type) {
      case 'field': {
        return classes.fieldAlignedText;
      }
      case 'text': {
        return classes.textAlignedText;
      }
      case 'radio': {
        return classes.radioAlignedText;
      }
      default: {
        return classes.alignedText;
      }
    }
  };
  const childrenAdditionalStyle = (type) => {
    switch (type) {
      case 'field':
        return classes.fieldBottomMargin;
      case 'text':
        return classes.textMaxWidth;
      default:
        return null;
    }
  };

  return (
    <div className={`${classes.wrapper} ${textColorSelect(textColor)}`}>
      <div className={`${classes.alignedTextWrapper} ${textWrapperWidth(maxWidth)}`}>
        <Typography variant="body1" className={textTopMargin(childrenType)} style={{ height: textHeight }}>
          {text}
        </Typography>
      </div>
      <div className={`${classes.children} ${childrenAdditionalStyle(childrenType)}`} ref={ref}>
        {children}
      </div>
    </div>
  );
}
