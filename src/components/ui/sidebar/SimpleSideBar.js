/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  IconButton,
  Box,
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
import NavItem from './NavItem';
import NavItemHover from './NavItemHover';

const FilterItems = [
  { name: 'All', icon: FiFileText, link: '/search/all' },
  { name: 'People', icon: FiUsers, link: '/search/people' },
  { name: 'Tags', icon: FiTag, link: '/search/tags' },
  { name: 'Schools', icon: BiBusSchool, link: '/search/schools' },
  { name: 'Courses', icon: FiBook, link: '/search/courses' },
  { name: 'Notes', icon: FiFile, link: '/search/notes' },
  { name: 'Templates', icon: FiEdit, link: '/search/templates' },
];

export default function SimpleSideBar({ children: content }) {
  const history = useHistory();
  const location = useLocation();
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue('gray.600', 'gray.300');

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
        {FilterItems.map((link) => {
          if (location.pathname === link.link) {
            return (
              <NavItemHover key={link.name} icon={link.icon} onClick={() => history.push(link.link)}>
                {link.name}
              </NavItemHover>
            );
          }
          return (
            <NavItem key={link.name} icon={link.icon} onClick={() => history.push(link.link)}>
              {link.name}
            </NavItem>
          );
        })}
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
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease" mt={[0]}>
        <IconButton
          aria-label="Menu"
          display={{ base: 'inline-flex', md: 'none' }}
          onClick={sidebar.onOpen}
          icon={<FiFilter />}
          variant="pendown"
          size="sm"
          mt={8}
          ml={8}
          mb={16}
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
