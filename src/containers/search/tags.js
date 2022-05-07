import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Button, Center,
} from '@chakra-ui/react';
import TagBadge from '../../components/ui/TagBadge';

export default function Tags() {
  const history = useHistory();
  // const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const tags = useSelector((state) => state.tag.byId);

  const [offset, setOffset] = useState(0);

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>Tags</Heading>
        <SimpleGrid
          minChildWidth="140px"
          spacing={4}
          mt={8}
          px={0}
          py={0}
          mx="auto"
        >
          {Object.keys(search.tags.ids).map((key) => search.tags.ids[key].map((id) => (<TagBadge key={id} onClick={() => history.push(`/tag/${id}`)}>{`#${tags[id].name}`}</TagBadge>)))}
        </SimpleGrid>
        {search.tags.totalCnt && search.tags.totalCnt !== 0 && (offset + 1) * 12 < search.tags.totalCnt
        && (
        <Center mt={8}>
          <Button
            variant="pendown-primary"
            size="lg"
                    // onClick={() => history.push('/login')}
                    // onKeyDown={() => history.push('/login')}
            tabIndex="-1"
            role="button"
          >
            View More
          </Button>
        </Center>
        )}
      </Box>
    </>
  );
}
