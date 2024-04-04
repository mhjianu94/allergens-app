import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <Flex bg="teal.500" p="2" color="white" wrap="wrap" gap="2">
            <Box >
                <Link as={RouterLink} to="/" m="2">Dashboard</Link>
            </Box>
            <Box >
                <Link as={RouterLink} to="/about" m="2">About</Link>
            </Box>
            <Box >
                <Link as={RouterLink} to="/about" m="2">About</Link>
            </Box>
        </Flex>
    )
}

export default NavigationBar;