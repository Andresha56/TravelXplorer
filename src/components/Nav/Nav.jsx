import './nav.scss';
import {
  Container,
  Flex,
  Spacer,
  Box,
  UnorderedList,
  ListItem,
  Button,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';

export default function Nav() {
  return (
    <Box
      as="main"
      className="banner-background-main-con"
      h="100vh"
    >
      <figure className="imgCon">
        <Image src="assets/bg.jpg" />
      </figure>
      <Box className="overlay"></Box>
      <Container maxW="1200px" margin="auto" className="headerCon" p="0">
        <Flex as="header" pt="3rem" align="center">
          <Box mr="3rem" fontSize="4xl">
            <Link color={'white.900'} fontFamily="heading">
              Travelo
            </Link>
          </Box>
          <Flex as="nav">
            <UnorderedList>
              <ListItem>
                <Link color={'white.900'}>Home</Link>
              </ListItem>
            </UnorderedList>

            <UnorderedList>
              <ListItem>
                <Link color={'white.900'}>About Us</Link>
              </ListItem>
            </UnorderedList>

            <UnorderedList>
              <ListItem>
                <Link color={'white.900'}>Destination</Link>
              </ListItem>
            </UnorderedList>

            <UnorderedList>
              <ListItem>
                <Link color={'white.900'}>Services</Link>
              </ListItem>
            </UnorderedList>
          </Flex>

          <Spacer />
          <Button variant="outline" borderRadius={50} color="white.900">
            Contact Us
          </Button>
        </Flex>
        <Flex
          h="calc( 100% - 6.5rem)"
          className="banner-content-display"
          direction="column"
          justify="center"
          mt="-2rem"
        >
          <Text fontSize="6xl">
            {' '}
            It is Better to <br></br>
            Travel well<br></br>
            Than to Arrive
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
