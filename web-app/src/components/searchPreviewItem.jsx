
import { Flex, Button, Heading, Box } from '@chakra-ui/react';

const SearchPreviewItem = () => {
    
  return (
    <Flex mt={2} mb={2} boxShadow='md' borderWidth='1px' p='6' rounded='md' w="90%" alignItems={""}>
        <Box>
            <Heading size="sm">Placeholder Header</Heading>
        </Box>
        <Box>
            <Button>Button</Button>
        </Box>
    </Flex>
  );
}

export default SearchPreviewItem;