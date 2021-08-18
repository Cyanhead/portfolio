import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
  Link,
} from '@chakra-ui/react';

import { BsFillBriefcaseFill } from 'react-icons/bs';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';

// GitHub
// LinkedIn
// Telegram

export default function Details() {
  // custom feature for social buttons
  const Social = props => {
    return (
      <Link
        href={props.href}
        display='block'
        // alignItems='center'
        // alignSelf='start'
        // justifyContent='start'
        // m={3}

        // px={5}
        px={{ base: 0, lg: 5 }}
        py={4}
        // py={{ base: 0, lg: 4 }}
        // pl={0}
        // border='2px'
        // bg='twitter.900'
        // borderColor='tomato'
        _hover={{ bg: 'gray.900' }}
        _active={{ bg: 'gray.700' }}
      >
        {/* <Link 
        // href={props.href}
        > */}
        <Flex
          // justifyContent='center'
          alignItems='center'
        >
          <Icon as={props.iconName} mr={3} />
          <chakra.h4>{props.children}</chakra.h4>
        </Flex>
        {/* </Link> */}
      </Link>
    );
  };

  const Feature = props => {
    return (
      <Flex
      //   border='2px'
      >
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue('brand.500', 'brand.300')}
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize='lg'
            fontWeight='bold'
            lineHeight='6'
            color={useColorModeValue('gray.900')}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue('gray.500', 'gray.400')}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w='auto'
      justifyContent='center'
      alignItems='center'
      // border='2px'
    >
      <Box
        shadow='xl'
        bg={useColorModeValue('white', 'gray.800')}
        px={8}
        py={20}
        mx='auto'
        // border='2px'
      >
        <SimpleGrid
          //   alignItems='center'
          columns={{ base: 1, lg: 5 }}
          // spacingY={{ base: 10, lg: 32 }}
          //   //   spacingX={{ base: 10, lg: 24 }}
          //   spacingX={{ base: 10, lg: 1 }}

          // ! grid box
          border='2px'
          borderColor='red.300'
        >
          {/* <GridItem colSpan={1}> */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            // w='20'
            // w={24}
            // alignSelf='start'
            // justifyContent='center'
            p={{ base: 0, lg: 3 }}
            // ! row 1
            border='2px'
            borderColor='green.200'
          >
            <Social
              //  href='/'
              iconName={FaEnvelope}
            >
              Mail
            </Social>
            <Social
              //  href='/'
              iconName={FaPhone}
            >
              Phone
            </Social>
            <Social
              //  href='/'
              iconName={FaGithub}
            >
              GitHub
            </Social>
            <Social
              //  href='/'
              iconName={FaLinkedin}
            >
              LinkedIn
            </Social>
            <Social
              //  href='/'
              iconName={FaTelegram}
            >
              Telegram
            </Social>

            {/* <Social href='/' iconName={BsFillBriefcaseFill}>
              Worry
            </Social>
            <Box>
              <Link src='/'>
                <Icon as={FaEnvelope} /> Mail
              </Link>
            </Box>
            <Box>
              <Link>
                <Icon as={FaPhone} /> Phone
              </Link>
            </Box>
            <Box>
              <Link>
                <Icon as={FaGithub} /> GitHub
              </Link>
            </Box>
            <Box border='2px'>
              <Link>
                <Icon as={FaLinkedin} /> LinkedIn
              </Link>
            </Box>
            <Box>
              <Link>
                <Icon as={FaTelegram} /> Telegram
              </Link>
            </Box> */}

            {/* <chakra.h2
              color={useColorModeValue('brand.500')}
              fontWeight='semibold'
              textTransform='uppercase'
              letterSpacing='wide'
            >
              Everything you need
            </chakra.h2> */}
            {/* <chakra.h2
              mb={3}
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight='extrabold'
              textAlign={{ base: 'center', sm: 'left' }}
              color={useColorModeValue('black')}
              lineHeight='shorter'
              letterSpacing='tight'
            >
              All-in-one platform
            </chakra.h2> */}
            {/* <chakra.p
              mb={6}
              fontSize={{ base: 'lg', md: 'xl' }}
              textAlign={{ base: 'center', sm: 'left' }}
              color={useColorModeValue('gray.600', 'gray.500')}
            >
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </chakra.p> */}
          </Box>
          {/* </GridItem> */}
          <GridItem colSpan={4}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: 'grid' }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
              //   border='2px'
              // ! row 2
              border='2px'
              borderColor='green.500'
            >
              <Feature title='Invite team members'>
                Improve your conversion rates by monitoring exactly what’s going
                on while your customers are in trial.{' '}
              </Feature>
              <Feature title='Unify your payments stack'>
                Manage all your online and offline sales in one place with a
                single integration, simplifying reporting and reconciliation.
              </Feature>
              <Feature title='Own your in-store experience'>
                Provide a seamless customer experience across channels, like
                reserving online and picking up in store.
              </Feature>
              <Feature title='Grow your platform’s revenue'>
                Add in-person payments to your platform or marketplace. Using
                Terminal with Connect.
              </Feature>
              <Feature title='Clear overview for efficient tracking'>
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Fea
              </Feature>
              <Feature title='Decide how you integrate Payments'>
                Love to code? Decide how you integrate Payments and build
                advanced and reliable products yourself from scratch.
              </Feature>
              <Feature title='Decide how you integrate Payments'>
                Love to code? Decide how you integrate Payments and build
                advanced and reliable products yourself from scratch.
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
