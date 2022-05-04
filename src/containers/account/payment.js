import React, { useState } from 'react';
import {
  Heading,
  useColorModeValue,
  Stat,
  StatNumber,
  StatLabel,
  Icon,
  HStack,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react';

import CustomIcon from '../../components/ui/icon/index';

function Payment() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [frequency, setFrequency] = useState('month');

  return (
    <>
      <Stack as="flex" direction="column" py={8} px={4} gap={4}>
        <Flex direction="column" gap={8} pb={8} borderBottom="2px black solid">
          <Heading fontSize="3xl">Status</Heading>
          <Stat
            px={4}
            py="2"
          // shadow="xl"
          // width="130px"
            minWidth="20%"
            maxWidth="50%"
            width="200px"
            border="2px solid"
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded="pendown"
          >
            <StatLabel fontWeight="medium" fontSize="md" isTruncated>
              Bean Balance
            </StatLabel>
            <StatNumber fontSize="2xl" fontWeight="bold">
              <HStack>
                <Icon as={CustomIcon.NoteBeanOriginal} />
                <Text>50</Text>
              </HStack>
            </StatNumber>
          </Stat>
        </Flex>
        <Flex direction="column" gap={8} pb={8}>
          <Heading fontSize="3xl">Tiers</Heading>
          {/* content */}
          <Flex justify="center" mx={['auto', 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              // p="2"
              textAlign="center"
              rounded="pendown"
              bg={useColorModeValue('gray.100', 'gray.500')}
              border="2px solid black"
            >
              <Button
                // colorScheme="brand"
                variant={frequency === 'month' ? 'pendown-primary' : 'pendown'}
                onClick={() => setFrequency('month')}
                px={6}
                border="hidden"
                _hover={{ shadow: 'none' }}
              >
                Popular
              </Button>
              <Button
                // colorScheme="brand"
                variant={frequency === 'year' ? 'pendown-primary' : 'pendown'}
                onClick={() => setFrequency('year')}
                px={6}
                border="hidden"
                _hover={{ shadow: 'none' }}
              >
                Recent
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}

export default Payment;
