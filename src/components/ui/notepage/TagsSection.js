import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  // Container,
  Box,
  Heading,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import TagBadge from '../TagBadge';

function TagsSection({ property }) {
  // const { noteId } = useParams();
  const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  const tags = useSelector((state) => state.tag.byId);
  // const dispatch = useDispatch();

  return (
    <>
      <VStack py={2} textAlign="center" alignItems="center" spacing={4} p={6}>
        <Heading
          fontSize="2xl"
          fontWeight="extrabold"
          width="100%"
          align="left"
        >
          Tags
        </Heading>
        <Box display="flex" flexWrap="wrap" textAlign="left" align="left" width="100%">
          <SimpleGrid
            minChildWidth="140px"
            width="100%"
            spacing={4}
            mt={8}
            px={0}
            py={0}
            mx="auto"
          >
            {property.tagIds.map((id) => (
              <TagBadge key={id} onClick={() => history.push(`/tag/${id}`)}>{`#${tags[id].name}`}</TagBadge>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </>
  );
}

export default TagsSection;
