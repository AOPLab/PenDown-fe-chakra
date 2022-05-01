/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  VStack, Stack,
  Box, Icon, HStack, Textarea,
  RadioGroup, Radio,
} from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { CheckIcon } from '@chakra-ui/icons';
import {
  FiCalendar, FiChevronRight, FiChevronDown,
} from 'react-icons/fi';
import Editable from '../../util/Editable';
import CardBadge from '../CardBadge';
// using react hook form without control this time

// FiEye, FiHeart, FiBookmark

const property = {
  pdfUrl: 'http://www.africau.edu/images/default/sample.pdf',
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Alt',
  dateCreated: 'Mar. 12, 2022',
  title: 'IM 3007 Midterm Note',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  viewCount: '3.2k',
  savedCount: '32',
  notability: true,
};

const universities = [
  'National Taiwan University (NTU)',
  'National Taipei University',
  'National Cheng Kung University',
  'Harvard University',
  'Columbia University',
  'Princeton University',
  'University of California, Berkeley',
  'University of California, Los Angeles',
  'University of California, San Diego',
  'University of California, San Francisco',
  'University of California, Irvine',
  'University of California, Davis',
  'University of California, Merced',
  'University of California, Riverside',
  'University of California, San Jose',
  'University of California, Sonoma',
  'University of California, Santa Barbara',
  'University of California, Santa Cruz',
];

const courses = [
  'CS 545',
  'CS 546',
  'CS 547',
  'IM 3007',
  'CS 50',
  'CS 51',
];

const tagList = [
  { value: 'funny', label: 'funny' },
  { value: 'presentation', label: 'presentation' },
  { value: 'night-life', label: 'night-life' },
  { value: 'beach', label: 'beach' },
  { value: 'note-taking', label: 'note-taking' },
  { value: 'harvard', label: 'harvard' },
  { value: 'family', label: 'family' },
];

export default function AddNotes({
  handleSubmit, errors, onClose, isSubmitting, register, files,
}) {
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
        onClose();
      }, 3000);
    });
  }
  console.log(files.pdf.name);

  const [fileName, setFileName] = useState(files.pdf.name.split('.').slice(0, -1).join('.'));
  const inputRef = useRef();

  // form's state
  const [courseOption, setCourseOption] = useState('Yes');

  const [pickerItems, setPickerItems] = useState(tagList);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (slcItems) => {
    if (slcItems) {
      setSelectedItems(slcItems);
    }
  };

  return (
    <>
      <Flex
        // bg={useColorModeValue('#F9FAFB', 'gray.600')}
        p={16}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <VStack py={2} textAlign="center" alignItems="center" spacing={4}>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            width="80%"
          >
            <Editable
              text={fileName}
              placeholder="Enter a note title"
              childRef={inputRef}
              type="input"
            >
              <InputGroup size="md">
                <Input
                  ref={inputRef}
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter a note title"
                  focusBorderColor="primary.400"
                  style={{ fontWeight: '600' }}
                  size="lg"
                />
                <InputRightElement width="4.5rem">
                  <Button marginTop="8px" h="1.75rem" size="sm" variant="clean">
                    <CheckIcon color="secondary.500" />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Editable>
          </Heading>
          <CardBadge
            content="Notability"
          />
          <Box display="flex" alignItems="center">
            <HStack>
              <Icon as={FiCalendar} w="18px" h="18px" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm">
                {property.dateCreated}
              </Box>
            </HStack>
          </Box>
          <Box border="2px solid black" borderRadius="pendown" p="5px">
            <Document file={files.pdf}>
              <Page
                pageNumber={1}
                height={376}
                width={275}
              />
            </Document>
          </Box>
        </VStack>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="8" px="4" py="8" marginTop="-16">
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel fontSize="lg" fontWeight="bold" marginBottom="4" htmlFor="name">Description</FormLabel>
            <Textarea
              borderWidth="2px"
              borderColor="black"
              borderRadius="pendown"
              focusBorderColor="primary.400"
              _hover={{ borderColor: 'primary.400' }}
              id="name"
              placeholder="What is good about this note?"
              {...register('Description', { required: true })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.course} isRequired>
            <FormLabel fontSize="lg" fontWeight="bold" marginBottom="4" htmlFor="course">Are you taking this for a course?</FormLabel>
            <RadioGroup onChange={setCourseOption} value={courseOption}>
              <Stack direction="row" spacing={16}>
                <Radio {...register('Are you taking this for a course?', { required: true })} type="radio" value="Yes" size="lg" colorScheme="primary">Yes</Radio>
                <Radio {...register('Are you taking this for a course?', { required: true })} type="radio" value="No" size="lg" colorScheme="primary">No</Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>
              {errors.course && errors.course.message}
            </FormErrorMessage>
          </FormControl>
          {courseOption === 'Yes' && (
            <>
              <FormControl isRequired={courseOption === 'Yes'}>
                <AutoComplete openOnFocus>
                  {({ isOpen }) => (
                    <>
                      <InputGroup>
                        <AutoCompleteInput
                          variant="filled"
                          placeholder="Pick your school"
                          borderWidth="2px"
                          borderColor="black"
                          borderRadius="pendown"
                          focusBorderColor="primary.400"
                          size="lg"
                          bg="white"
                          _hover={{ borderColor: 'primary.400' }}
                        />
                        <InputRightElement>
                          <Icon as={isOpen ? FiChevronRight : FiChevronDown} marginTop="8px" />
                        </InputRightElement>
                      </InputGroup>
                      <AutoCompleteList>
                        {universities.map((country, cid) => (
                          <AutoCompleteItem
                            key={`option-${cid}`}
                            value={country}
                          >
                            {country}
                          </AutoCompleteItem>
                        ))}
                      </AutoCompleteList>
                    </>
                  )}
                </AutoComplete>
                {/* <FormHelperText>Who do you support.</FormHelperText> */}
              </FormControl>
              <FormControl isRequired={courseOption === 'Yes'}>
                <AutoComplete openOnFocus>
                  {({ isOpen }) => (
                    <>
                      <InputGroup>
                        <AutoCompleteInput
                          variant="filled"
                          placeholder="Pick a course"
                          borderWidth="2px"
                          borderColor="black"
                          borderRadius="pendown"
                          focusBorderColor="primary.400"
                          bg="white"
                          size="lg"
                          _hover={{ borderColor: 'primary.400' }}
                        />
                        <InputRightElement>
                          <Icon as={isOpen ? FiChevronRight : FiChevronDown} marginTop="8px" />
                        </InputRightElement>
                      </InputGroup>
                      <AutoCompleteList>
                        {courses.map((country, cid) => (
                          <AutoCompleteItem
                            key={`option-${cid}`}
                            value={country}
                          >
                            {country}
                          </AutoCompleteItem>
                        ))}
                      </AutoCompleteList>
                    </>
                  )}
                </AutoComplete>
                {/* <FormHelperText>Who do you support.</FormHelperText> */}
              </FormControl>
            </>
          )}
          <FormControl isInvalid={errors.template} isRequired>
            <FormLabel fontSize="lg" fontWeight="bold" marginBottom="4" htmlFor="template">Is this a template note?</FormLabel>
            <RadioGroup>
              <Stack direction="row" spacing={16}>
                <Radio {...register('Is this a template note?', { required: true })} type="radio" value="Yes" size="lg" colorScheme="primary">Yes</Radio>
                <Radio {...register('Is this a template note?', { required: true })} type="radio" value="No" size="lg" colorScheme="primary">No</Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>
              {errors.template && errors.template.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="tag" isRequired>
            {/* <FormLabel fontSize="lg" fontWeight="bold" marginBottom="4" htmlFor="tag">Tags</FormLabel> */}
            <CUIAutoComplete
              label="Choose tags"
              labelStyleProps={{ fontSize: 'lg', fontWeight: 'bold', marginBottom: '0' }}
              inputStyleProps={{
                borderWidth: '2px',
                borderColor: 'black',
                borderRadius: 'pendown',
                focusBorderColor: 'primary.400',
                size: 'lg',
                bg: 'white',
                _hover: { borderColor: 'primary.400' },
              }}
              toggleButtonStyleProps={{
                size: 'lg',
                variant: 'pendown-yellow',
              }}
              placeholder="Search tags"
              onCreateItem={handleCreateItem}
              items={pickerItems}
              selectedItems={selectedItems}
              onSelectedItemsChange={(changes) => handleSelectedItemsChange(changes.selectedItems)}
            />
          </FormControl>
        </Stack>
      </form>
    </>
  );
}
