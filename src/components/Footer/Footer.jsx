import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiSend } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";

const Footer = () => {
  return (
    <Box bg="black" color="white.2">
      <Stack
        spacing={8}
        pt={10}
        pb={5}
        px={{ base: 4, md: 10, lg: 20, xl: "140px" }}
      >
        <Flex
          wrap="wrap"
          justify="space-between"
          gap={{ base: 10, md: 6, lg: 10 }}
        >
          {/* Exclusive Collection */}
          <Stack spacing={4} minW="200px">
            <Text fontSize="2xl" fontWeight="bold">
              Exclusive Collection
            </Text>
            <Text fontSize="md">Subscribe</Text>
            <Stack spacing={2}>
              <Text fontSize="md">Get 10% off your first order</Text>
              <InputGroup maxW="217px" size="md" minH="38px">
                <Input
                  placeholder="Enter your email"
                  bg="black"
                  pl="20px"
                  pr="12px"
                  py="8px"
                  _placeholder={{
                    color: "gray.500",
                    fontSize: "xs",
                  }}
                  _focus={{
                    borderColor: "white.2",
                    boxShadow: "0 0 0 1px white.2",
                  }}
                />
                <InputRightElement pointerEvents="none">
                  <BiSend fontSize="18px" color="gray.500" />
                </InputRightElement>
              </InputGroup>
            </Stack>
          </Stack>

          {/* Support */}
          <Stack spacing={4} minW="200px">
            <Text fontSize="2xl" fontWeight="bold">
              Support
            </Text>
            <Text fontSize="md">Ranibari Kathmandu 44600 Nepal</Text>
            <Text fontSize="md">exclusivecollection@gmail.com</Text>
            <Text fontSize="md">+977 9812345678</Text>
          </Stack>

          {/* Account */}
          <Stack spacing={4} minW="200px">
            <Text fontSize="2xl" fontWeight="bold">
              Account
            </Text>
            <Text fontSize="md">My Account</Text>
            <HStack>
              <Text fontSize="md">Login /</Text>
              <Text fontSize="md">Register</Text>
            </HStack>
            <Text fontSize="md">Cart</Text>
            <Text fontSize="md">Wishlist</Text>
            <Text fontSize="md">Shop</Text>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={4} minW="200px">
            <Text fontSize="2xl" fontWeight="bold">
              Quick Links
            </Text>
            <Text fontSize="md">Privacy Policy</Text>
            <Text fontSize="md">Terms of Service</Text>
            <Text fontSize="md">Refund Policy</Text>
            <Text fontSize="md">FAQ</Text>
            <Text fontSize="md">Contact</Text>
          </Stack>

          {/* Download App */}
          <Stack spacing={4} minW="200px">
            <Text fontSize="2xl" fontWeight="bold">
              Download App
            </Text>
            <Stack spacing={2}>
              <Text fontSize="xs" color="gray.400">
                Save $3 with App New User Only
              </Text>
              <HStack>
                <Image src="/images/qr.png" boxSize="80px" />
                <Stack spacing={2}>
                  <Image src="/images/android.png" maxW="100px" />
                  <Image src="/images/apple.png" maxW="100px" />
                </Stack>
              </HStack>
              <HStack fontSize="xl" spacing={6}>
                <Icon as={RiFacebookLine} />
                <Icon as={BsTwitterX} />
                <Icon as={FiInstagram} />
                <Icon as={FaLinkedinIn} />
              </HStack>
            </Stack>
          </Stack>
        </Flex>

        {/* Bottom Text */}
        <Text textAlign="center" fontSize="sm" color="gray.600" pt={10}>
          © {new Date().getFullYear()} Exclusive Collection. All rights
          reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
