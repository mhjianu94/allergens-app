import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const SideBar = ({ isOpen, onClose}) => {
    const btnRef = React.useRef()
    return (
        <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                <Link as={RouterLink} to="/" onClick={onClose}>Dashboard</Link>
                <Link as={RouterLink} to="/about" onClick={onClose}>About</Link>
                <Link as={RouterLink} to="/contact" onClick={onClose}>Contact</Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
}

export default SideBar;
