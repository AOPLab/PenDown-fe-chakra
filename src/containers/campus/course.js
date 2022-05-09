import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HStack, Flex, VStack, Button, Text,
} from '@chakra-ui/react';

import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';
import CardSection from '../../components/ui/CardSection';

function Course() {
  const { schoolId, courseId } = useParams();
  const courses = useSelector((state) => state.course.byId);
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text px="32px" color="gray.600" fontWeight={600} fontSize="md">course/</Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge textTransform="lowercase">{ courses[courseId].name }</BannerBadge>
              <Button
                variant="pendown-primary"
                size="sm"
              >
                Follow
              </Button>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Followers" stat="1,234" />
              {/* 註 stat=courses[courseId].followers */}
              <StatsCard title="Notes" stat="1" />
              {/* 註 stat=courses[courseId].notes */}
            </HStack>
          </Flex>
        </Flex>
        <CardSection />
      </Flex>
    </>
  );
}

export default Course;
