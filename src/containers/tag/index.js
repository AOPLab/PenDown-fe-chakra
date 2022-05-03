import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Flex,
  HStack,
} from '@chakra-ui/react';

import CardSection from '../../components/ui/CardSection';
import StatsCard from '../../components/ui/cards/StatsCard';

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
      <Flex align="center" justify="center">
        <HStack spacing={8} mx="auto" maxW="3xl" py={12} px={6}>
          <StatsCard title="Followers" stat="1,234" />
          <StatsCard title="Following" stat="1,234" />
        </HStack>
      </Flex>
      <CardSection noteType={noteType} handleNoteTypeChange={handleNoteTypeChange} />
    </>
  );
}

export default Tag;
