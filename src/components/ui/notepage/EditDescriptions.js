/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
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
  Image,
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
import CardBadge from '../cards/CardBadge';
import { fetchAllSchools } from '../../../actions/school/school';
import { fetchSchoolCourses } from '../../../actions/course/course';

// using react hook form without control this time

export default function EditDescriptions({
  errors, register, setContent, tagLists, property,
}) {
  const schools = useSelector((state) => state.school);
  const courses = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const [universities, setUniversities] = useState([]);
  const [courseList, setCourseList] = useState([]);

  const [fileName, setFileName] = useState(property.title);
  const inputRef = useRef();

  // form's state
  const [courseOption, setCourseOption] = useState(property.courseId !== 0 ? 'Yes' : 'No');
  const [schoolId, setSchoolId] = useState(property.schoolId !== 0 ? property.schoolId : '');
  const [courseId, setCourseId] = useState(property.courseId !== 0 ? property.courseId : '');
  const [schoolName, setSchoolName] = useState(property.school !== '' ? property.school : '');
  const [courseName, setCourseName] = useState(property.course !== ' ' ? property.course : '');

  const [pickerItems, setPickerItems] = useState(tagLists);
  const [selectedItems, setSelectedItems] = useState(property.tagList ? property.tagList : []);

  useEffect(() => {
    setContent({
      title: fileName,
      courseOption,
      selectedItems,
      schoolId,
      courseId,
    });
  }, [courseId, courseOption, fileName, schoolId, selectedItems, setContent]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (slcItems) => {
    if (slcItems) {
      setSelectedItems(slcItems);
    }
  };

  const handleCourseOptionChange = (e) => {
    setCourseOption(e);
    if (e === 'No') {
      setSchoolId('');
      setSchoolName('');
      setCourseId('');
      setCourseName('');
    }
  };

  const handleSchoolIdChange = (e) => {
    dispatch(fetchSchoolCourses(parseInt(e, 10)));
    setSchoolId(e);
    setSchoolName(schools.byId[e].name);
    setCourseId('');
    setCourseName('');
  };

  const handleCourseIdChange = (e) => {
    setCourseId(e);
    setCourseName(`${courses.byId[e].no} ${courses.byId[e].name}`);
  };

  useEffect(() => {
    setUniversities(schools.allIds.map((id) => ({ id: String(id), name: schools.byId[id].name })));
  }, [schools.allIds, schools.byId]);

  useEffect(() => {
    setCourseList(courses.allIds.filter((id) => courses.byId[id].school_id === parseInt(schoolId, 10)).map((id) => ({ id: String(id), name: courses.byId[id].name, no: courses.byId[id].no })));
  }, [courses.allIds, courses.byId, schoolId]);

  useEffect(() => {
    dispatch(fetchAllSchools());
    if (property.schoolId && property.schoolId !== 0) {
      dispatch(fetchSchoolCourses(parseInt(property.schoolId, 10)));
    }
  }, [dispatch, property.schoolId]);

  const ref = useRef();

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
            content={property.nota_url !== undefined ? 'Notability' : 'GoodNotes'}
          />
          <Box display="flex" alignItems="center">
            <HStack>
              <Icon as={FiCalendar} w="18px" h="18px" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm">
                {moment(property.dateCreated).format('MMM DD, YYYY')}
              </Box>
            </HStack>
          </Box>
          {/* <Box border="2px solid black" borderRadius="pendown" p="5px">

          </Box> */}
          <Box>
            <Image
              src={property.imageUrl}
              alt={property.imageAlt}
              ref={ref}
              width="290px"
              maxWidth="full"
              maxHeight="376px"
              objectFit="cover"
              borderRadius="pendown"
              border="2px solid black"
            />
          </Box>
        </VStack>
      </Flex>
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
            {...register('description', { required: true })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.course} isRequired>
          <FormLabel fontSize="lg" fontWeight="bold" marginBottom="4" htmlFor="course">Are you taking this for a course?</FormLabel>
          <RadioGroup onChange={handleCourseOptionChange} value={courseOption}>
            <Stack direction="row" spacing={16}>
              <Radio {...register('isCourse?', { required: true })} type="radio" value="Yes" size="lg" colorScheme="primary">Yes</Radio>
              <Radio {...register('isCourse?', { required: true })} type="radio" value="No" size="lg" colorScheme="primary">No</Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>
            {errors.course && errors.course.message}
          </FormErrorMessage>
        </FormControl>
        {courseOption === 'Yes' && (
        <>
          <FormControl isRequired={courseOption === 'Yes'}>
            <AutoComplete openOnFocus onChange={handleSchoolIdChange}>
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
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      _hover={{ borderColor: 'primary.400' }}
                    />
                    <InputRightElement>
                      <Icon as={isOpen ? FiChevronRight : FiChevronDown} marginTop="8px" />
                    </InputRightElement>
                  </InputGroup>
                  <AutoCompleteList>
                    {universities.map(({ id, name }) => (
                      <AutoCompleteItem
                        key={`option-${id}`}
                        value={id}
                        label={name}
                      >
                        {name}
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </>
              )}
            </AutoComplete>
            {/* <FormHelperText>Who do you support.</FormHelperText> */}
          </FormControl>
          <FormControl isRequired={courseOption === 'Yes'}>
            <AutoComplete openOnFocus onChange={handleCourseIdChange}>
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
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      _hover={{ borderColor: 'primary.400' }}
                    />
                    <InputRightElement>
                      <Icon as={isOpen ? FiChevronRight : FiChevronDown} marginTop="8px" />
                    </InputRightElement>
                  </InputGroup>
                  <AutoCompleteList>
                    {courseList.map(({ id, name, no }) => (
                      <AutoCompleteItem
                        key={`option-${id}`}
                        value={id}
                        label={`${no} ${name}`}
                      >
                        {no}
                        {' '}
                        {name}
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
          <RadioGroup defaultValue={property.template !== false ? 'Yes' : 'No'}>
            <Stack direction="row" spacing={16}>
              <Radio {...register('isTemplate', { required: true })} type="radio" value="Yes" size="lg" colorScheme="primary">Yes</Radio>
              <Radio {...register('isTemplate', { required: true })} type="radio" value="No" size="lg" colorScheme="primary">No</Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>
            {errors.template && errors.template.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="tag" isRequired>
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
        <FormControl isInvalid={errors.name} isRequired>
          <FormLabel fontSize="lg" fontWeight="bold" marginTop="-6" marginBottom="4" htmlFor="description">Beans required for this note</FormLabel>
          <Input
            borderWidth="2px"
            borderColor="black"
            borderRadius="pendown"
            size="lg"
            focusBorderColor="primary.400"
            _hover={{ borderColor: 'primary.400' }}
            id="bean"
            placeholder={50}
            {...register('bean', { required: true })}
          />
        </FormControl>
      </Stack>
    </>
  );
}
