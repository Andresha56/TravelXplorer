import React from 'react';
import { Heading,Box,Text } from '@chakra-ui/react';

function Hero({heading,text}) {
  return (
    <>
      <Box>
        <Heading as="h3">{heading}</Heading>
        <Text color="blackAlpha.800" width="65%" className="p-txt-margin">
          {text}
        </Text>
      </Box>
    </>
  );
}

export default Hero;
