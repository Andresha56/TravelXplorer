import './destination.scss';
import Hero from '../Headings/Hero';
import {
  Container,
  UnorderedList,
  ListItem,
  Box,
  Text,
  Grid,
  Image,
  GridItem,
  Button,
} from '@chakra-ui/react';

function Destination({data}) {
  return (
    <Container maxW="1200px" margin="auto" className="destination-container">
      <Hero
        heading="Popular Destination"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti est
  sunt labore dignissimos, reprehenderit cumque maxime voluptates at
  voluptas."
      />

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        templateRows="repeat(2, 1fr)"
        className="Grid-con"
      >
        {data.map(data => {
          return (
            <GridItem
              key={data.id}
              className="grid-content"
              h="250px"
              w="200"
              position="relative"
            >
              <UnorderedList h="100%" w="100%">
                <ListItem w="100%" h="100%">
                  <Image src={data.imgSrc} w="100%" h="100%" />
                  <Box className="grid-txt-con">
                    <Text>{data.placename}</Text>
                    <Button borderRadius={50}>{data.btn}</Button>
                  </Box>
                  <Box
                    position="absolute"
                    className="grid-bg-dark"
                    w="100%"
                    height="100%"
                  />
                </ListItem>
              </UnorderedList>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Destination;
