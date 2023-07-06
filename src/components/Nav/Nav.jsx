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
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <Box
      as="main"
      className="banner-background-main-con"
      h="100vh"
    >
      <figure className="imgCon">
        <Image src="assets/bg1.jpg" />
      </figure>
      <Box className="overlay"></Box>
      <Container maxW="1200px" margin="auto" className="headerCon" p="0">
        <Flex as="header" pt="3rem" align="center">
          <Box mr="3rem" fontSize="4xl">
            <NavLink to="./" fontFamily="heading">
              Travelo
            </NavLink>
          </Box>
          <Flex as="nav">
            <UnorderedList>
              <ListItem>
                <NavLink to="/">Home</NavLink>
              </ListItem>
            </UnorderedList>

            <UnorderedList>
              <ListItem>
                <NavLink to="/about">About Us</NavLink>
              </ListItem>
            </UnorderedList>

            <UnorderedList>
              <ListItem>
                <NavLink to="/destination">Destination</NavLink>
              </ListItem>
            </UnorderedList>

            <UnorderedList>
              <ListItem>
                <NavLink to="/services">Services</NavLink>
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
   
        >
          <Text fontSize="5xl">
            Plan your Tour <br></br>
            We will help you <br></br>
            Make it Great
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
