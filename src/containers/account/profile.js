import {
  Box, Container, Flex, SimpleGrid, useColorModeValue, Image, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';
import Card from '../../components/ui/Card';

function PersonalProfile() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <Box borderBottom="2px solid black" pt="20">
      <Container maxW="6xl">
        <Flex
          bg={useColorModeValue('#F9FAFB', 'gray.600')}
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={16}
            px={{ base: 4, lg: 8, xl: 12 }}
            py={20}
            mx="auto"
            // bg={useColorModeValue('white', 'gray.800')}
            // shadow="xl"
          >
            <Card variant="pendown">
              <Image
                src="https://chakra-ui.com/eric.jpg"
                rounded="full"
                w={32}
                h={32}
                boxShadow="md"
              />
              <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
                Welcome back, Brian
              </Heading>
              <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
                Use your fingerprint to continue.
              </Text>
            </Card>
            <Card variant="pendown">
              <Image
                src="https://chakra-ui.com/eric.jpg"
                rounded="full"
                w={32}
                h={32}
                boxShadow="md"
              />
              <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
                Welcome back, Brian
              </Heading>
              <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
                Use your fingerprint to continue.
              </Text>
            </Card>
            <Card variant="pendown">
              <Image
                src="https://chakra-ui.com/eric.jpg"
                rounded="full"
                w={32}
                h={32}
                boxShadow="md"
              />
              <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
                Welcome back, Brian
              </Heading>
              <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
                Use your fingerprint to continue.
              </Text>
            </Card>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}

export default PersonalProfile;
