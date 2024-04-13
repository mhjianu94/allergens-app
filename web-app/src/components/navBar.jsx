import {Box, Link, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Stack, useColorMode, Center, IconButton, Image } from '@chakra-ui/react'
import { MoonIcon, SunIcon,HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom';
import mainLogo from '../assets/images/main-logo-transparent.png';
import React from 'react';


export default function NavigationBar({ isOpen , onToggle }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const btnRef = React.useRef()

  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'stretch'} justifyContent={'space-between'}>          
            <Flex alignItems="center">
              <Image marginRight={"10px"} width="100%" height="100%" objectFit="cover" src={mainLogo} alt="Logo" />            
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={onToggle}
                ref={btnRef}
              />
              <Stack
                display={{ base: 'none', md: 'flex' }}
                justify={'flex-end'}
                direction={{ base: 'column', md: 'row' }}
                spacing={6}
              >
                <Link as={RouterLink} to="/">Dashboard</Link>
                <Link as={RouterLink} to="/about">About</Link>
                <Link as={RouterLink} to="/contact">Contact</Link>
              </Stack>
            </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  )
}