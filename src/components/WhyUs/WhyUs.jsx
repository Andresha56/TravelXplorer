import { Link } from 'react-router-dom';
import Hero from '../Headings/Hero';
import { useNavigate } from 'react-router-dom';
import "./whyUs.scss"
import {
  Container,
  Flex,
  Box,
  Spacer,
  UnorderedList,
  ListItem,
  Progress
} from '@chakra-ui/react';

function WhyUs() {
const navigate = useNavigate()
  return (
    <Container maxW="1200px" margin="auto" textAlign="center">
      <Hero
        heading="Why Choose Us"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti est
        sunt labore dignissimos, reprehenderit cumque maxime voluptates at
        voluptas."
      />

      <Box as="section">
        <Flex>
          <Box >
            <UnorderedList display="flex">
              <ListItem>
                <Link onClick={()=>navigate("divrse-destination")}>Diverse Destination</Link>
              </ListItem>
              <ListItem>
                <Link>World Class Service</Link>
              </ListItem>
              <ListItem>
                <Link>Personal Guide</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box w="100%">
          <Progress value={80} mb={5}/>
          <Progress value={90} mb={5}/>
          <Progress value={90} />
        
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default WhyUs;
