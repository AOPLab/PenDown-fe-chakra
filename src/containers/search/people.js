import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Heading, SimpleGrid, Button, Center,
} from '@chakra-ui/react';
import SearchAvatar from '../../components/ui/avatar/SearchAvatar';

export default function People() {
  const history = useHistory();
  // const location = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const accounts = useSelector((state) => state.accounts.byId);

  const [offset, setOffset] = useState(0);

  return (
    <>
      <Box borderWidth="4px" border="3px black" borderBottom="3px solid black" py="8" my="2">
        <Heading>People</Heading>
        <SimpleGrid
          minChildWidth="120px"
          spacing={4}
          mt={8}
          px={0}
          py={0}
          mx="auto"
        >
          {Object.keys(search.accounts.ids).map((key) => search.accounts.ids[key].map((id) => (<SearchAvatar key={id} onClick={() => history.push(`/account/${id}`)} username={accounts[id].username} />)))}
        </SimpleGrid>
        {search.accounts.totalCnt && search.accounts.totalCnt !== 0 && (offset + 1) * 12 < search.accounts.totalCnt
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
