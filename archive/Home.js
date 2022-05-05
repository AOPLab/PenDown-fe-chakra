<Box borderBottom="2px solid black">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 16, md: 16 }}
        >

          <Card variant="rounded">
            <Image
              src="https://chakra-ui.com/eric.jpg"
              rounded="full"
              w={32}
              h={32}
              boxShadow="md"
            />
            <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
              Welcome back, Brian
            </Heading>
            <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
              Use your fingerprint to continue.
            </Text>
          </Card>
        </Stack>
      </Box>
      <Box borderBottom="2px solid black">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={900}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight="110%"
          >
            Make money from
            {' '}
            <br />
            <Text as="span" color="green.400">
              your audience
            </Text>
          </Heading>
          <Text color="gray.500">
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction="column"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
          >
            <Button
              variant="pendown-primary"
              px={6}
            >
              Get Started
            </Button>
            <Link size="sm" to="/">
              Learn more
            </Link>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position="absolute"
                right={-71}
                top="10px"
              />
              <Text
                fontSize="lg"
                fontFamily="Caveat"
                position="absolute"
                right="-125px"
                top="-15px"
                transform="rotate(10deg)"
              >
                Starting at $15/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box borderBottom="2px solid black">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight="110%"
          >
            Make money from
            {' '}
            <br />
            <Text as="span" color="green.400">
              your audience
            </Text>
          </Heading>
          <Text color="gray.500">
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction="column"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
          >
            <Button
              variant="pendown-primary"
              px={6}
            >
              Get Started
            </Button>
            <Link size="sm" to="/">
              Learn more
            </Link>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position="absolute"
                right={-71}
                top="10px"
              />
              <Text
                fontSize="lg"
                fontFamily="Caveat"
                position="absolute"
                right="-125px"
                top="-15px"
                transform="rotate(10deg)"
              >
                Starting at $15/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
