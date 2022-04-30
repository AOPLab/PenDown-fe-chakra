/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import {
  Input, FormControl, FormLabel, InputGroup, InputLeftElement, Icon, // FormErrorMessage, Icon,
} from '@chakra-ui/react';
import { FiFile } from 'react-icons/fi';
import { useController } from 'react-hook-form';

export const FileUpload = ({
  name, placeholder, acceptedFileTypes, control, setValue, children, isRequired = false,
}) => {
  const inputRef = useRef();
  const {
    field: {
      ref, onChange, value, ...inputProps
    },
    fieldState: { isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: isRequired },
  });

  useEffect(() => {
    setValue(value);
  }, [setValue, value]);

  return (
    <>
      <FormControl isInvalid={false} isRequired={isRequired}>
        <FormLabel htmlFor="writeUpFile">{children}</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
          >
            <Icon as={FiFile} />
          </InputLeftElement>
          <input
            type="file"
            onChange={(e) => onChange(e.target.files[0])}
            accept={acceptedFileTypes}
            name={name}
            ref={inputRef}
            {...inputProps}
            style={{ display: 'none' }}
          />
          <Input
            placeholder={placeholder || 'Your file ...'}
            onClick={() => inputRef.current.click()}
            readOnly
            value={(value && value.name) || ''}
          />
        </InputGroup>
        {/* <FormErrorMessage>
          {invalid}
        </FormErrorMessage> */}
      </FormControl>
    </>
  );
};

FileUpload.defaultProps = {
  acceptedFileTypes: '',
  allowMultipleFiles: false,
};

export default FileUpload;
