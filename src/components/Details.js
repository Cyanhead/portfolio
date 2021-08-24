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
  // CircularProgress,
  // CircularProgressLabel,
  UnorderedList,
  ListItem,
  Text,
  Image,
  HStack,

  // ! ======================================

  // * increase font size for smaller screens
  // * reduce paddng for smaller screens
  // * add footer 'made with heart by cyan'

  // ! ======================================
} from '@chakra-ui/react';

import {
  FaEnvelope,
  // FaPhone,
  FaGithub,
  FaLinkedin,
  // FaTelegram,
} from 'react-icons/fa';

import hng from '../assets/logo_hng.jpg';
import zuri from '../assets/logo_zuri.jpg';
// import i4g from '../assets/logo_i4g.jpg';
// import { Code } from '@chakra-ui/react';

export default function Details() {
  //  custom feature for social buttons
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
        isExternal
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

  // const CustomCircleProgress = props => {
  //   return (
  //     <CircularProgress
  //       value={props.value}
  //       color='twitter.500'
  //       trackColor={useColorModeValue('gray.200', 'gray.600')}
  //       size='70px'
  //       thickness='10px'
  //       mr={2}
  //       mb={2}
  //     >
  //       <CircularProgressLabel>{props.label}</CircularProgressLabel>
  //     </CircularProgress>
  //   );
  // };

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
        border='1px'
        borderColor={useColorModeValue('gray.400', 'gray.500')}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 6 }}
          my={10}
          px={{ base: 0, md: 10 }}
          // justifyContent='center'
          alignItems='baseline'
        >
          <chakra.h1 fontWeight='extrabold' fontSize='3xl'>
            Hello,
          </chakra.h1>
          <GridItem colSpan={5}>
            <Text>
              <br />
              My name is Bunmi Oye, and I am a Frontend Web Developer with an
              intermediate proficiency level with React.
              <br />
              I have an eye for design and can convert beautiful web designs to
              neat code.
              <br />I enjoy problem-solving, the building of structures, and
              gaining new knowledge and experience, all of which make me a good
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
            {/* <Social
              //  href='/'
              iconName={FaPhone}
            >
              Phone
            </Social> */}
            <Social href='https://www.github.com/Cyanhead' iconName={FaGithub}>
              GitHub
            </Social>
            <Social
              href='https://www.linkedin.com/in/bunmi-oye-95a476200/'
              //  href='/'
              iconName={FaLinkedin}
            >
              LinkedIn
            </Social>
            {/* <Social
              //  href='/'
              iconName={FaTelegram}
            >
              Telegram
            </Social> */}
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
              borderLeft={{ base: 'none', lg: '1px' }}
              // borderColor={useColorModeValue('red.500', 'green.800')}
            >
              <Feature title='Skills'>
                <MultiBadge
                  subs={[
                    'problem solving',
                    'teamwork',
                    'flexibility',
                    'time management',
                    'collaboration',
                  ]}
                />
              </Feature>
              <Feature title='Tech Skills'>
                <MultiBadge
                  subs={[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Bootstrap',
                    'React',
                    'Chakra UI',
                    'Figma',
                  ]}
                />

                {/* <CustomCircleProgress value={65} label={'HTML'} />
                <CustomCircleProgress value={50} label={'CSS'} />
                <CustomCircleProgress value={40} label={'JS'} />
                <CustomCircleProgress value={30} label={'React'} />
                <CustomCircleProgress value={55} label={'Chakra'} /> */}
              </Feature>
              <Feature title='Experience'>
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
                <MultiBadge
                  subs={[
                    'Video games',
                    'Anime',
                    'Music',
                    'Books',
                    'foreign food',
                    'tourism',
                  ]}
                />
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
        <HStack
          py={5}
          // px={5}
          my={10}
          mx={{ base: 0, md: 10 }}
          justifyContent='flex-end'
          alignItems='flex-end'
          // bg='red.500'
          // border='3px solid'
        >
          <Link
            border='1px'
            borderColor='gray.600'
            href='https://training.zuri.team/'
            isExternal
          >
            <Image src={zuri} alt='logos' w={20} />
          </Link>
          <Link
            border='1px'
            borderColor='gray.600'
            href='https://internship.zuri.team/'
            isExternal
          >
            <Image src={hng} alt='logos' w={20} />
          </Link>
          {/* <Link border='1px' isExternal>
            <Image src={i4g} alt='logos' w={20} />
          </Link> */}
        </HStack>
      </Box>
    </Flex>
  );
}
