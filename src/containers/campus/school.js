import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HStack, Flex, VStack, Button, Text,
} from '@chakra-ui/react';

import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';

function School() {
  const { schoolId } = useParams();
  const schools = useSelector((state) => state.school.byId);
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text color="gray.600" fontWeight={600} fontSize="md">school/</Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge textTransform="lowercase">{ schools[schoolId].name }</BannerBadge>
              <Button
                variant="pendown-primary"
                size="sm"
              >
                Follow
              </Button>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Followers" stat="1,234" />
              <StatsCard title="Courses" stat="1,234" />
              <StatsCard title="Notes" stat="9" />
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default School;
