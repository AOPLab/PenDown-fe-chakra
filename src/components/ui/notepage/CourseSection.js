import React from 'react';
import {
  // Container,
  Box,
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';

import BannerBadge from '../cards/BannerBadge';

function CourseSection({ property }) {
  // const { noteId } = useParams();
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
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
          This note is taken for ...
        </Heading>
        <Box display="p" textAlign="left" align="left" width="100%">
          <Text as="span" color="red.500" fontWeight="bold">{property.school}</Text>
          &apos;s
          {' '}
          <Box mt="2">
            <BannerBadge>
              {property.course}
            </BannerBadge>
          </Box>
        </Box>
      </VStack>
    </>
  );
}

export default CourseSection;
