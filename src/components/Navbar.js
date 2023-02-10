import "../style/navbar.css";
import { Link } from "react-scroll";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Hide,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      id="navtop"
      className=" w-[100%] bg-black bg-gradient-to-b from-black to-gray-800 shadow-md shadow-white "
    >
      <Box px={4} bg="#191327" borderBottom={"2px solid  #693ac0"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          id="nav"
        >
          <IconButton
            fontSize={"2xl"}
            icon={<HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex justifyContent={"space-between"} flex={90}>
            <Heading color={"white"}>Moumuta</Heading>
            <HStack
              fontSize={"18px"}
              id="divlink"
              as={"nav"}
              spacing={30}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="homeID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  {" "}
                  Home
                </Text>{" "}
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="aboutID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  About
                </Text>
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="skillsID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  Skills
                </Text>
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  Projects
                </Text>
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="contactID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  Contact
                </Text>
              </Link>
            </HStack>
          </Flex>
          <Hide below="1000px">
            <Flex
              size={{ base: "md", md: "lg" }}
              flex={10}
              className="resbtndiv"
            >
              <Button
                color={"white"}
                bg=" #693ac0"
                alignItems="center"
                pt="10px"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/14YOuTrCyX6ayfn7PeyO_2kLxGa8l7PK_/view?usp=sharing"
                  )
                }
              >
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginBottom: "10px",
                  }}
                  href="MoumitaDas.pdf"
                  download="MoumitaDas.pdf"
                >
                  Resume
                </a>
              </Button>
            </Flex>
          </Hide>
        </Flex>

        {isOpen ? (
          <Box pb={2} display={{ md: "none" }}>
            <Stack as={"nav"} fontSize="16px" fontWeight={"bold"}>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="homeID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  {" "}
                  Home
                </Text>{" "}
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="aboutID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  About
                </Text>
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="skillsID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  Skills
                </Text>
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  Projects
                </Text>
              </Link>
              <Link
                className="text-slate-500 px-2 py-2  cursor-pointer"
                activeClass="active"
                to="contactID"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <Text cursor={"pointer"} color={"white"}>
                  Contact
                </Text>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
