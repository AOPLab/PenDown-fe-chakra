import React from 'react';
import {
  Button, HStack, Input, InputGroup, InputLeftElement, Select,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export default function SearchField({ noteType, handleNoteTypeChange }) {
  const filters = [
    {
      title: 'Types',
      items: ['Notability', 'Goodnotes'],
    },
  ];
  return (
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
        />
      </InputGroup>

      <Select
        defaultValue="Choose Note Type"
        display={{ base: 'none', md: 'flex' }}
        value={noteType}
        focusBorderColor="primary.400"
        size="lg"
        bg="white"
        width={{ base: '20%', md: '20%', lg: '30%' }}
        borderColor="black"
        borderWidth="2px"
        borderRadius="pendown"
        onChange={handleNoteTypeChange}
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
      <Button size="lg" fontSize="20px" variant="pendown-yellow" px="0"><Search2Icon /></Button>
    </HStack>
  );
}
