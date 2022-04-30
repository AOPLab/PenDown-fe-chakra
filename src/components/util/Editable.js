/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Box,
} from '@chakra-ui/react';
// import './Editable.css';

const Editable = ({
  text,
  type,
  placeholder,
  children,
  childRef,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (event, eventType) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];
    if (
      (eventType === 'textarea' && keys.indexOf(key) > -1)
      || (eventType !== 'textarea' && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };

  return (
    <section {...props}>
      {isEditing ? (
        <Box
          width="100%"
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </Box>
      ) : (
        <Box
          // className={`rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-${type}`}
          width="100%"
          onClick={() => setEditing(true)}
        >
          <Box as="span" color={`${text ? 'black' : 'gray.500'}`}>
            {text || placeholder || 'Editable content'}
          </Box>
          {/* <span className={`${text ? 'text-black' : 'text-gray-500'}`}>
          </span> */}
        </Box>
      )}
    </section>
  );
};

export default Editable;
