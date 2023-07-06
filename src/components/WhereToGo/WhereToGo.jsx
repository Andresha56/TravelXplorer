import { useState } from 'react';
import './whereToGo.scss';

import { Box, Heading, Flex, Spacer, Container } from '@chakra-ui/react';

function WhereToGo() {
  const initialValue = { destination: '', date: '', travelType: '' };
  const [formValue, setValue] = useState(initialValue);
  const handelform = event => {
    const { name, value } = event.target;
    setValue({ ...formValue, [name]: value });
    console.log(formValue)
  };
  return (
    <Box className="where-to-go-con">
      <Container maxW="1200" p={0}>
        <Flex className="where-to-go" justify="center" align="center">
          <Box className="where-to-go-txt-con">
            <Heading as="h3" fontSize={24}>
              Where you want to go ?
            </Heading>
          </Box>
          <Spacer />
          <Box className="where-to-go-input-con">
            <Flex gap={3} as="form">
              <input
                type="text"
                className="input-fields"
                name="destination"
                placeholder="where to go"
                value={formValue.destination}
                onChange={handelform}
              />
              <input
                type="date"
                className="input-fields"
                name="date"
                placeholder="Date"
                value={formValue.date}
                onChange={handelform}
              />
             
              <select placeholder='Travel Type' className="input-fields" value={formValue.travelType} onChange={handelform} name="travelType"> 
                <option >Travel Type 1</option>
                <option>Travel Type 2</option>
                <option> Travel type 3</option>
              </select>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default WhereToGo;
