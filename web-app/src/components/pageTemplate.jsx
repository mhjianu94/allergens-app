import { Container, Heading, Box, VStack,useColorMode ,Divider } from '@chakra-ui/react';

const PageTemplate = ({ children, props }) => {
    const {pageTitle} = props;
    const { colorMode } = useColorMode();
    const textColor = colorMode === "light" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)";

  return (
    <Container maxW="container.xl" p={8} my={12}>
      <VStack spacing={2} align="stretch">
        <Heading mb={2} textColor={textColor} size="lg"  >{pageTitle}</Heading>
        <Box width="90%" my={0}>
            <Divider orientation='horizontal' marginBottom="0px" border ="1px" borderColor="grey.300"/>
        </Box>
        <Box width="80%" my={0}>
            <Divider orientation='horizontal' border ="1px" borderColor="green.300"/>
        </Box>
        <Box p={5} mt={10} shadow="md" borderWidth="1px">
          {children}
        </Box>
      </VStack>
    </Container>
  );
}

export default PageTemplate;