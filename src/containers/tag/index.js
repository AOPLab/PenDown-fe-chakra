import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  HStack, Flex, Spacer, VStack, Button, Text,
} from '@chakra-ui/react';

import CardSection from '../../components/ui/CardSection';
import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';

function Tag() {
  const { tagId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [noteType, setNoteType] = useState('Choose Note Type');
  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
  };

  return (
    <>
      <Flex direction="column" gap={10}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text color="gray.600" fontWeight={600} fontSize="md">tags/</Text>
          <Flex minWidth="60%" width="60%" alignItems="center" gap="2" flexWrap="wrap">
            <VStack>
              <BannerBadge textTransform="lowercase">#funny</BannerBadge>
              <Button
                variant="pendown-primary"
                size="sm"
                // fontSize="sm"
              >
                Follow
              </Button>
            </VStack>
            <Spacer />
            <HStack spacing={4}>
              <StatsCard title="Followers" stat="1,234" />
              <StatsCard title="Notes" stat="9" />
            </HStack>
          </Flex>
          {/* <HStack spacing={8} mx="auto" maxW="3xl" width="80%" py={12} px={6} align="flex-start" /> */}
        </Flex>
        <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} />
      </Flex>
    </>
  );
}

export default Tag;
