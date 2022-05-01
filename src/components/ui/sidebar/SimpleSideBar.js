/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  DrawerOverlay,
  Divider,
  VStack,
} from '@chakra-ui/react';
import {
  FiFileText, FiUsers, FiTag, FiBook, FiFile, FiEdit, FiFilter,
} from 'react-icons/fi';
import {
  BiBusSchool,
} from 'react-icons/bi';

const FilterItems = [
  { name: 'All', icon: FiFileText },
  { name: 'People', icon: FiUsers },
  { name: 'Tags', icon: FiTag },
  { name: 'Schools', icon: BiBusSchool },
  { name: 'Courses', icon: FiBook },
  { name: 'Notes', icon: FiFile },
  { name: 'Templates', icon: FiEdit },
];

export default function SimpleSideBar({ children: content }) {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue('gray.600', 'gray.300');

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="2"
        py="3"
        cursor="pointer"
        color={useColorModeValue('inherit', 'gray.400')}
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.800'),
          color: useColorModeValue('red.600', 'red.200'),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top={{ base: 0, md: 20 }}
      mt={{ base: 0, md: '-6px' }}
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('black', 'gray.700')}
      borderRightWidth="2px"
      w="60"
      {...props}
    >
      <VStack px="4" py="4" align="left">
        <Text
          fontSize="2xl"
          fontWeight="bold"
        >
          Search Results
        </Text>
        <Divider style={{ borderBottom: '2px black solid' }} />
        <Text
          fontSize="xl"
          fontWeight="bold"
        >
          Filters
        </Text>
      </VStack>
      <VStack
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.900"
        align="left"
        // marginLeft={-2}
        aria-label="Filters"
      >
        {FilterItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </VStack>
    </Box>
  );
  return (
    <Box
      as="section"
      // bg={useColorModeValue('gray.50', 'gray.700')}
      minH="100vh"
    >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <IconButton
          aria-label="Menu"
          display={{ base: 'inline-flex', md: 'none' }}
          onClick={sidebar.onOpen}
          icon={<FiFilter />}
          variant="pendown"
          size="sm"
          mt={2}
          ml={4}
        />
        {/* <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          // bg={useColorModeValue('white', 'gray.800')}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          h="14"
        >
        </Flex> */}

        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          {content}
          {/* <Text>Wussup</Text>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" /> */}
        </Box>
      </Box>
    </Box>
  );
}
