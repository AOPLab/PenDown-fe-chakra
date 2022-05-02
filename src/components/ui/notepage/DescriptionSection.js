import React from 'react';
import {
  // Container,
  Box,
  Heading,
  VStack,
} from '@chakra-ui/react';

function DescriptionSection({ property }) {
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
          Description
        </Heading>
        <Box display="p" textAlign="left" width="100%">
          {property.description}
        </Box>
      </VStack>
    </>
  );
}

export default DescriptionSection;
