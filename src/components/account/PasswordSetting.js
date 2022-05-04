import React, { useState } from 'react';
import {
  useToast, Button, Box, Flex,
  FormControl, FormLabel, Input, Stack, Icon,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import { FiLock, FiCheck } from 'react-icons/fi';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function PasswordSetting({ onSubmit }) {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const [errorTexts, setErrorTexts] = useState({
    username: '',
    password: '',
  });
  const errorToast = useToast();

  const handlePasswordChange = (e) => {
    if (e.target.value !== '') {
      if (errors.password && errorTexts.password === 'Incorrect username or password') {
        setErrors({
          username: false,
          password: false,
        });
        setErrorTexts({
          username: '',
          password: '',
        });
      } else {
        setErrors((ori) => ({ ...ori, password: false }));
        setErrorTexts((ori) => ({ ...ori, password: '' }));
      }
    }
    setPassword(e.target.value);
  };

  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <Box py={4} px={8}>
        <Flex direction="column" gap={10} pt={4}>
          {/* <AccountSetting /> */}
          <Box>
            <Stack display="flex" direction="column" gap={5}>
              <FormControl>
                <Stack display="flex" alignItems={{ base: 'start', md: 'center' }} justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
                  <FormLabel
                    display="block"
                    textAlign="start"
                    marginInlineEnd={3}
                    transitionProperty="all"
                    transitionDuration="150ms"
                    minWidth="3xs"
                    htmlFor="name"
                  >
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon as={FiLock} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Old Password</Text>
                    </Box>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id="login-password"
                      type={isOpen ? 'text' : 'password'}
                      _hover={{ borderColor: 'primary.400' }}
                      label="Password"
                      value={password}
                      onChange={(e) => handlePasswordChange(e)}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      error={errors.password}
                      placeholder="Password"
                      size="lg"
                      required
                      helperText={errorTexts.password}
                    />
                    <InputRightElement>
                      <IconButton
                        onClick={onClickReveal}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        variant="link"
                        border="none"
                    // size="lg"
                    // marginY="auto"
                        marginTop="8px"
                        _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                        marginRight="10px"
                        paddingY="5px"
                        fontSize="24px"
                        isRound
                      />
                    </InputRightElement>
                  </InputGroup>
                </Stack>
              </FormControl>
              <FormControl>
                <Stack display="flex" alignItems={{ base: 'start', md: 'center' }} justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
                  <FormLabel
                    display="block"
                    textAlign="start"
                    marginInlineEnd={3}
                    transitionProperty="all"
                    transitionDuration="150ms"
                    minWidth="3xs"
                    htmlFor="name"
                  >
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon as={FiLock} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">New Password</Text>
                    </Box>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id="login-password"
                      type={isOpen ? 'text' : 'password'}
                      _hover={{ borderColor: 'primary.400' }}
                      label="Password"
                      value={password}
                      onChange={(e) => handlePasswordChange(e)}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      error={errors.password}
                      placeholder="Password"
                      size="lg"
                      required
                      helperText={errorTexts.password}
                    />
                    <InputRightElement>
                      <IconButton
                        onClick={onClickReveal}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        variant="link"
                        border="none"
                    // size="lg"
                    // marginY="auto"
                        marginTop="8px"
                        _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                        marginRight="10px"
                        paddingY="5px"
                        fontSize="24px"
                        isRound
                      />
                    </InputRightElement>
                  </InputGroup>
                </Stack>
              </FormControl>
              <FormControl>
                <Stack display="flex" alignItems={{ base: 'start', md: 'center' }} justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
                  <FormLabel
                    display="block"
                    textAlign="start"
                    marginInlineEnd={3}
                    transitionProperty="all"
                    transitionDuration="150ms"
                    minWidth="3xs"
                    htmlFor="name"
                  >
                    <Box display="flex" alignItems="center" gap="2">
                      <Icon as={FiCheck} strokeWidth="3px" w={5} h={5} />
                      <Text fontWeight="bold" fontSize="lg">Confirm New Password</Text>
                    </Box>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id="login-password"
                      type={isOpen ? 'text' : 'password'}
                      _hover={{ borderColor: 'primary.400' }}
                      label="Password"
                      value={password}
                      onChange={(e) => handlePasswordChange(e)}
                      focusBorderColor="primary.400"
                      borderRadius="pendown"
                      borderColor="black"
                      borderWidth="2px"
                      error={errors.password}
                      placeholder="Password"
                      size="lg"
                      required
                      helperText={errorTexts.password}
                    />
                    <InputRightElement>
                      <IconButton
                        onClick={onClickReveal}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        variant="link"
                        border="none"
                    // size="lg"
                    // marginY="auto"
                        marginTop="8px"
                        _focus={{ bg: 'gray.100', border: 'none', borderRadius: 'full' }}
                        marginRight="10px"
                        paddingY="5px"
                        fontSize="24px"
                        isRound
                      />
                    </InputRightElement>
                  </InputGroup>
                </Stack>
              </FormControl>
            </Stack>
          </Box>
          <Flex direction="row-reverse" gap={4}>
            <Button
              variant="pendown-primary"
              size="lg"
              onClick={onSubmit}
            >
              Save
            </Button>
            <Button
              variant="pendown"
              size="lg"
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>

  );
}

export default PasswordSetting;
