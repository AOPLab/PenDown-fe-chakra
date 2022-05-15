/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  // FormErrorMessage
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
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

  const [filename, setFilename] = useState('');

  useEffect(() => {
    setValue(value);
    setFilename((value && value.name) || '');
  }, [setValue, value]);

  const handleClick = () => {
    inputRef.current.value = '';
    setFilename('');
    onChange(undefined);
    setValue(undefined);
  };

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
            value={filename}
            focusBorderColor="primary.400"
          />
          <InputRightElement width="2.5rem">
            {typeof value !== 'undefined' ? <CloseIcon ml={1} w={3} h={3} cursor="pointer" onClick={handleClick} /> : <></>}
          </InputRightElement>
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
