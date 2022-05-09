import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HStack, Flex, VStack, Text, Stack, useColorModeValue, TabList, Tab, TabPanel, Tabs, TabPanels,
} from '@chakra-ui/react';

import StatsCard from '../../components/ui/cards/StatsCard';
import BannerBadge from '../../components/ui/cards/BannerBadge';
import CardSection from '../../components/ui/CardSection';

function Tag() {
  const { tagId } = useParams();
  const tags = useSelector((state) => state.tag.byId);

  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const noteIds = useSelector((state) => state.hotNotes.hotNoteIds);
  // 註 要改成接對應的 note

  const [noteType, setNoteType] = useState('Choose Note Type');
  const handleNoteTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setNoteType(value);
  };

  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ['Popular', 'Recent'];
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Flex direction="column" align="left" gap={10} pt={4} px={8}>
        <Flex direction="column" align="left" gap={4} py={4}>
          <Text px="32px" color="gray.600" fontWeight={600} fontSize="md">
            tag/
          </Text>
          <Flex alignItems="top" gap={10} flexWrap="wrap" px="32px">
            <VStack spacing={3}>
              <BannerBadge textTransform="lowercase">
                #
                { tags[tagId].name }
              </BannerBadge>
            </VStack>
            <HStack spacing={4}>
              <StatsCard title="Followers" stat="1,234" />
              {/* 註 stat=courses[courseId].followers */}
              <StatsCard title="Notes" stat="1" />
              {/* 註 stat=courses[courseId].notes */}
            </HStack>
          </Flex>
        </Flex>
        <Tabs isLazy size="lg" width="100%" border="hidden" variant="unstyled" index={tabIndex} onChange={handleTabsChange}>
          <Flex justify="center" mx={['auto', 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              textAlign="center"
              rounded="pendown"
              bg={useColorModeValue('gray.100', 'gray.500')}
              border="2px solid black"
            >
              <TabList
                borderBottom="hidden"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    value={tab}
                    _selected={{ bg: 'primary.400', borderRadius: 'pendown' }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </Stack>
          </Flex>
          <TabPanels>
            {tabs.map((tab) => (
              <TabPanel key={tab}>
                <Flex
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} noteIds={noteIds} />
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default Tag;
