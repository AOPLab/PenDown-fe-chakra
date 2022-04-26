import React from 'react';
import {
  Button, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup,
} from '@chakra-ui/react';
import { Search2Icon, TriangleDownIcon } from '@chakra-ui/icons';

export default function SearchField() {
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

      <Menu closeOnSelect={false}>
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
        </MenuButton>

        <MenuList>
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
        </MenuList>
      </Menu>
      <Button size="lg" fontSize="20px" variant="pendown-yellow" px="0"><Search2Icon /></Button>
    </HStack>
  );
}
