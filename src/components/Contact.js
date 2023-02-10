import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <Box id="contactID" bg="#0B0417" pt="10">
      <Center>
        <Heading color={"#6A3BC0"}>Contact</Heading>
      </Center>
      {/* <Flex  gap="50" pl="40%" pr="20" border={"1px solid red"}> */}
      <Flex justifyContent={"center"} className="contact_m">
        <Box display="flex" flexDir={"column"} gap="8" justifyContent="center">
          <Box display="flex" alignItems="center">
            <Box
              border={"3px solid black"}
              bgColor="#6A3BC0"
              borderRadius={"50%"}
              p="1"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                w="10"
              />
            </Box>
            <Link pl="30" href="https://github.com/Moumita7">
              <Text color={"white"}>https://github.com/Moumita7</Text>
            </Link>
          </Box>

          <Box display="flex" alignItems="center">
            <Box
              border={"3px solid black"}
              bgColor="#6A3BC0"
              borderRadius={"50%"}
              p="1"
            >
              <Image
                src="https://www.svgrepo.com/download/108614/linkedin.svg"
                w="10"
              />
            </Box>
            <Link pl="30" href="https://www.linkedin.com/in/moumita-das07/">
              <Text color={"white"}>
                https://www.linkedin.com/in/moumita-das07/
              </Text>
            </Link>
          </Box>

          <Box display="flex" alignItems="center">
            <Box
              border={"3px solid black"}
              bgColor="#6A3BC0"
              borderRadius={"50%"}
              p="1"
            >
              <Image
                src="https://www.svgrepo.com/show/131843/big-twitter-logo.svg"
                w="10"
              />
            </Box>
            <Link pl="30" href="https://twitter.com/Moumita86952918">
              <Text color={"white"}>https://twitter.com/Moumita86952918</Text>
            </Link>
          </Box>
        </Box>

        <Box ml="10">
          <Image
            borderRadius={"80%"}
            src="https://user-images.githubusercontent.com/97180521/215027269-c93cf23f-e1b3-4127-8634-e8cf9fca86cd.png"
          />
        </Box>
      </Flex>
      <Center bg="#6A3BC0">Designed and developed By Moumita</Center>
    </Box>
  );
};

export default Contact;
