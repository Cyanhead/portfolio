import React from 'react';
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

import {
  // MdHeadset,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import {
  FaEnvelope,
  // FaPhone,
  FaGithub,
  FaLinkedin,
  // FaTelegram,
} from 'react-icons/fa';

import prof from '../assets/Profile_02.jpg';

const Profile = () => {
  const MobileSocial = props => {
    return (
      <Link href={props.href} isExternal>
        <Icon
          h={6}
          w={6}
          as={props.iconName}
          color={useColorModeValue('white', 'gray.800')}
        />
      </Link>
    );
  };
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={{ base: 8, md: 20, lg: 50 }}
      // p={50}
      w='full'
      alignItems='center'
      justifyContent='center'
      // border='1px'
    >
      <Box
        w='sm'
        mx='auto'
        bg={useColorModeValue('white', 'gray.800')}
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        border='1px'
        borderColor={useColorModeValue('gray.400', 'gray.500')}
      >
        <Image
          w='full'
          h={56}
          //   h={60}
          fit='cover'
          objectPosition='center'
          //   src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
          src={prof}
          alt='avatar'
        />

        {/* <Flex alignItems='center' px={6} py={3} bg='gray.900'>
          <Icon as={MdHeadset} h={6} w={6} color='white' />

          <chakra.h1 mx={3} color='white' fontWeight='bold' fontSize='lg'>
            Focusing
          </chakra.h1>
        </Flex> */}

        <Box py={4} px={6}>
          <chakra.h1
            fontSize='xl'
            fontWeight='bold'
            color={useColorModeValue('gray.800', 'white')}
          >
            Bunmi Oye
          </chakra.h1>

          <chakra.p py={2} color={useColorModeValue('gray.700', 'gray.400')}>
            Frontend Developer (Intern)
          </chakra.p>

          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <Icon
              //   as={BsFillBriefcaseFill}
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize='sm'>
              {/* Zuri ● Internship */}
              Zuri • Internship (HNGi8)
            </chakra.h1>
          </Flex>

          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            {/* change icons to match others */}
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize='sm'>
              Nigeria
            </chakra.h1>
          </Flex>
          <Flex
            display={{ base: 'none', lg: 'flex' }}
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            {/* change icons to match others */}
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize='sm'>
              bunmioye09@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          px={6}
          py={4}
          // try out better contrasting colors
          color='gray.800'
          bg='twitter.500'
          justifyContent='space-between'
        >
          <MobileSocial
            href='mailto:bunmioye09@gmail.com'
            iconName={FaEnvelope}
          />
          {/* <MobileSocial href='phoneto:+2348105580152' iconName={FaPhone} /> */}
          <MobileSocial
            href='https://www.github.com/Cyanhead'
            iconName={FaGithub}
          />
          <MobileSocial
            href='https://www.linkedin.com/in/bunmi-oye-95a476200/'
            iconName={FaLinkedin}
          />
          {/* <MobileSocial iconName={FaTelegram} /> */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
