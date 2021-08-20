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
  Badge,
  CircularProgress,
  CircularProgressLabel,
  UnorderedList,
  ListItem,
  Text,

  // ! ===============================

  // ? maybe create custom em tag?
  // * increase font size for smaller screens
  // * reduce paddng for smaller screens
  // * put 'hello word' Code
  // * add footer 'made with heart by cyan'
  // * add colormode to more components
  // * add colormode to prof socials

  // ! ===============================
} from '@chakra-ui/react';

import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';
import { Code } from '@chakra-ui/react';

export default function Details() {
  // ! custom feature for social buttons
  const Social = props => {
    return (
      <Link
        href={props.href}
        display='block'
        ml={-3}
        px={{ base: 0, lg: 5 }}
        py={4}
        _hover={{ bg: 'gray.600' }}
        _active={{ bg: 'gray.700' }}
      >
        <Flex alignItems='center'>
          <Icon as={props.iconName} mr={3} />
          <chakra.h4>{props.children}</chakra.h4>
        </Flex>
      </Link>
    );
  };

  const MultiBadge = props => {
    let subs = props.subs;
    return (
      <>
        {subs.map(sub => (
          <Badge mx={2} my={1} ml={0} p={1}>
            {sub}
          </Badge>
        ))}
      </>
    );
  };

  const CustomCircleProgress = props => {
    return (
      <CircularProgress
        value={props.value}
        color='twitter.500'
        trackColor={useColorModeValue('gray.200', 'gray.600')}
        size='70px'
        thickness='10px'
        mr={2}
        mb={2}
      >
        <CircularProgressLabel>{props.label}</CircularProgressLabel>
      </CircularProgress>
    );
  };

  const Feature = props => {
    return (
      <Flex>
        <Box>
          <chakra.dt
            fontSize='lg'
            fontWeight='bold'
            lineHeight='6'
            color={useColorModeValue('gray.900')}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue('gray.700', 'gray.300')}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      // p={50}
      p={{ base: 8, md: 20, lg: 50 }}
      w='auto'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        shadow='xl'
        bg={useColorModeValue('white', 'gray.800')}
        px={6}
        py={20}
        mx='auto'
        // border='2px'
      >
        <SimpleGrid
          columns={{ base: 1, lg: 6 }}
          my={10}
          // justifyContent='center'
          alignItems='baseline'
        >
          <chakra.h1 fontWeight='extrabold' fontSize='3xl'>
            Hello,
          </chakra.h1>
          <GridItem colSpan={5}>
            <Text>
              My name is Bunmi Oye, and I am a Front End Web Developer. I began
              my journey in tech in June 2020, and it have been one of the
              better decisions in my life. I enjoy problem solving, building of
              structures, and gaining new knowledge, all of which make me a good
              addition to any team.
            </Text>
          </GridItem>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, lg: 6 }}
          // border='2px'

          // ! grid box
        >
          <Box
            display={{ base: 'none', lg: 'block' }}
            p={{ base: 0, lg: 3 }}
            // ! row 1
          >
            <Social href='mailto:bunmioye09@gmail.com' iconName={FaEnvelope}>
              Mail
            </Social>
            <Social
              //  href='/'
              iconName={FaPhone}
            >
              Phone
            </Social>
            <Social href='https://www.github.com/Cyanhead' iconName={FaGithub}>
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
          </Box>
          <GridItem colSpan={5}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: 'grid' }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
              px={{ base: 0, md: 10 }}
              // ! row 2
              // ? remember to specify border color to white
              borderLeft={{ base: 'none', lg: '2px' }}
              // borderColor={useColorModeValue('red.500', 'green.800')}
            >
              <Feature title='Skills'>
                <MultiBadge
                  subs={[
                    'Problem Solving',
                    'Teamwork',
                    'Flexibility',
                    'Time management',
                    'Empathy',
                  ]}
                />
              </Feature>
              <Feature title='Tech Skills'>
                <CustomCircleProgress value={55} label={'HTML'} />
                <CustomCircleProgress value={50} label={'CSS'} />
                <CustomCircleProgress value={40} label={'JS'} />
                <CustomCircleProgress value={30} label={'React'} />
                <CustomCircleProgress value={60} label={'Chakra'} />
              </Feature>
              <Feature title='Career'>
                <UnorderedList>
                  <ListItem>
                    HNG Internship 8 <br />
                    <chakra.span fontSize='sm' fontStyle='italic'>
                      08/2021 - present
                    </chakra.span>
                  </ListItem>
                  <ListItem>
                    Zuri Training <br />
                    <chakra.span fontSize='sm' fontStyle='italic'>
                      03/2021 - 07/2021{' '}
                    </chakra.span>
                  </ListItem>
                  {/* <ListItem>Self Taught</ListItem> */}
                </UnorderedList>
              </Feature>
              <Feature title='Projects'>
                <UnorderedList>
                  <ListItem>Stocka (Zuri Training)</ListItem>
                </UnorderedList>
              </Feature>
              <Feature title='Education'>
                <UnorderedList>
                  <ListItem>
                    Federal University, Oye-Ekiti <br />
                    <chakra.span fontSize='sm' fontStyle='italic'>
                      09/2016 - present
                    </chakra.span>
                  </ListItem>
                </UnorderedList>
              </Feature>
              <Feature title='Interests'>
                <MultiBadge subs={['Video games', 'Anime', 'Music', 'Books']} />
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
