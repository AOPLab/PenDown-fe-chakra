import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Button, HStack, Input, InputGroup, InputLeftElement, Select, useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent, DrawerBody,
  useColorModeValue,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

import {
  searchCourses, searchSchools, searchTags, searchPeople,
} from '../../actions/common/common';

export default function SearchField() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [noteType, setNoteType] = useState('Choose Note Type');
  const [query, setQuery] = useState('');
  const filters = [
    {
      title: 'Types',
      items: ['Notability', 'Goodnotes'],
    },
  ];

  const onSearch = () => {
    switch (location.pathname) {
      case '/search/all':
        dispatch(searchTags(query, 0));
        dispatch(searchSchools(query, 0));
        dispatch(searchCourses(query, 0));
        dispatch(searchPeople(query, 0));
        break;
      case '/search/people':
        dispatch(searchPeople(query, 0));
        break;
      case '/search/tags':
        dispatch(searchTags(query, 0));
        break;
      case '/search/schools':
        dispatch(searchSchools(query, 0));
        break;
      case '/search/courses':
        dispatch(searchCourses(query, 0));
        break;
      case '/search/notes':
        console.log('searchnotes');
        break;
      case '/search/templates':
        console.log('searchtemplates');
        break;
      default:
        history.push('/search/all');
    }
  };

  return (
    <>
      <HStack
        flex={1}
        mr={2}
        spacing={2}
        minWidth={['100%', '100%', 'initial']}
        maxWidth={[null, null, '100%']}
        alignItems="center"
      >
        <InputGroup flex={1} ml={2}>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" display="flex" marginTop="8px" />
          </InputLeftElement>
          <Input
            type="text"
            focusBorderColor="primary.400"
            bg="white"
            size="lg"
            width="100%"
            _hover={{ borderColor: 'primary.400' }}
            borderColor="black"
            borderRadius="pendown"
            placeholder="IM 3007"
            borderWidth="2px"
            onClick={onOpen}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
        <Select
          display={{ base: 'none', md: 'flex' }}
          value={noteType}
          focusBorderColor="primary.400"
          _hover={{ borderColor: 'primary.400' }}
          size="lg"
          bg="white"
          width={{ base: '20%', md: '20%', lg: '30%' }}
          borderColor="black"
          borderWidth="2px"
          borderRadius="pendown"
          onChange={(e) => setNoteType(e.target.value)}
          alignItems="center"
          justifyContent="center"
        >
          <option key="Choose Note Type" value="Choose Note Type">Note Type</option>
          <option key="All" value="All">All</option>
          <option key="Notability" value="Notability">Notability</option>
          <option key="Goodnotes" value="Goodnotes">Goodnotes</option>
        </Select>

        {/* <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          variant="pendown-yellow"
          padding={3}
          bg="white"
          display={{ base: 'none', md: 'flex' }}
          size="lg"
          fontWeight={500}
          // onClick={handleClick}
          leftIcon={<TriangleDownIcon display="flex" />}
          // bgGradient={gradients.greenToBlue}
          alignItems="center"
          justifyContent="center"
        >
          Note Type
        </MenuButton> */}

        {/* <MenuList>
          {
            filters.map(({ title, items }) => (
              <MenuOptionGroup
                key={title}
                title={title}
                type="checkbox"
                // value={stackCategories}
                bgClip="text"
                color="black"
                // onChange={onStackCategoryOptionsChange}
                // bgGradient={gradients.greenToBlue}
                // defaultValue={INITIAL_STACK_CATEGORIES}
              >
                {
                  items.map((item) => (
                    <MenuItemOption
                      key={item}
                      value={item}
                      isChecked
                    >
                      {item}
                    </MenuItemOption>
                  ))
                }
              </MenuOptionGroup>
            ))
          }
        </MenuList> */}
        {/* </Menu> */}
        <Button size="lg" fontSize="20px" variant="pendown-yellow" px="0" onClick={onSearch}><Search2Icon /></Button>
      </HStack>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}
          {/* <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody> */}
          <DrawerBody p="12px" bg={useColorModeValue('grayAlpha.600', 'blackAlpha.800')}>
            <HStack
              flex={1}
              mx="auto"
              spacing={2}
              minWidth={['100%', '100%', '80%', '50%']}
              maxWidth={['100%', '100%', '90%', '70%', '50%']}
              alignItems="center"
            >

              <InputGroup flex={[3, 4, 5]}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" display="flex" marginTop="8px" />
                </InputLeftElement>
                <Input
                  type="text"
                  focusBorderColor="primary.400"
                  bg="white"
                  size="lg"
                  width="100%"
                  _hover={{ borderColor: 'primary.400' }}
                  borderColor="black"
                  borderRadius="pendown"
                  placeholder="IM 3007"
                  borderWidth="2px"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </InputGroup>
              <Select
                flex={1}
                // display={{ base: 'none', md: 'flex' }}
                value={noteType}
                focusBorderColor="primary.400"
                size="lg"
                bg="white"
                width={{ base: '20%', md: '20%', lg: '30%' }}
                borderColor="black"
                borderWidth="2px"
                borderRadius="pendown"
                onChange={(e) => setNoteType(e.target.value)}
                alignItems="center"
                justifyContent="center"
              >
                <option key="Choose Note Type" value="Choose Note Type">Note Type</option>
                <option key="All" value="All">All</option>
                <option key="Notability" value="Notability">Notability</option>
                <option key="Goodnotes" value="Goodnotes">Goodnotes</option>
              </Select>
              <Button size="lg" fontSize="20px" variant="pendown-yellow" px="0" onClick={onSearch}><Search2Icon /></Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
