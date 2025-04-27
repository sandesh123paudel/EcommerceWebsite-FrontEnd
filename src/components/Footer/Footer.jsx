import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
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
            <Link fontSize="md" href="mailto:exclusivecollection@gmail.com">
              exclusivecollection@gmail.com
            </Link>
            <Link fontSize="md" href="tel:+9779812345678">
              +977 9812345678
            </Link>
          </Stack>

          {/* Account */}
          <Stack spacing={4} minW="200px">
            <Text fontSize="2xl" fontWeight="bold">
              Account
            </Text>
            <Link fontSize="md" href="/account">
              My Account
            </Link>
            <HStack>
              <Link fontSize="md" href="/login">
                Login /
              </Link>
              <Link fontSize="md" href="/register">
                Register
              </Link>
            </HStack>
            <Link fontSize="md" href="/cart">
              Cart
            </Link>
            <Link fontSize="md" href="/wishlist">
              Wishlist
            </Link>
            <Link fontSize="md" href="/shop">
              Shop
            </Link>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={4} minW="200px">
            <Text fontSize="2xl" fontWeight="bold">
              Quick Links
            </Text>
            <Link fontSize="md" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link fontSize="md" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link fontSize="md" href="/refund-policy">
              Refund Policy
            </Link>
            <Link fontSize="md" href="/faq">
              FAQ
            </Link>
            <Link fontSize="md" href="/contact">
              Contact
            </Link>
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
                <Link href="https://facebook.com" isExternal>
                  <Icon as={RiFacebookLine} />
                </Link>
                <Link href="https://twitter.com" isExternal>
                  <Icon as={BsTwitterX} />
                </Link>
                <Link href="https://instagram.com" isExternal>
                  <Icon as={FiInstagram} />
                </Link>
                <Link href="https://linkedin.com" isExternal>
                  <Icon as={FaLinkedinIn} />
                </Link>
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
