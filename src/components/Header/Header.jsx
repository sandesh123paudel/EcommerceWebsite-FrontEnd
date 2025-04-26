import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <Box
      minH="90px"
      borderBottom="1px"
      borderBottomColor="gray.400"
      px={{ base: 4, md: 10, lg: 20, xl: "140px" }}
      py={{ base: 1, md: 2 }}
    >
      <Flex
        gap={{
          base: 3,
        }}
        align={{
          base: "center",
          md: "center",
          lg: "center",
        }}
        justify={{
          base: "space-between",
          md: "space-between",
        }}
        minH={{
          base: "90px",
          md: "90px",
        }}
        color="black"
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        {/* Left - Logo */}
        <Box flex="1">
          <Text textStyle="h2" fontWeight="bold">
            Exclusive Collection
          </Text>
        </Box>

        {/* Center - Nav Items */}
        <Flex flex="2" justify="center" gap={{ base: 4, md: 8 }}>
          <Link href="#" fontWeight="medium">
            Home
          </Link>
          <Link href="#" fontWeight="medium">
            Contact
          </Link>
          <Link href="#" fontWeight="medium">
            About
          </Link>
          <Link href="#" fontWeight="medium">
            SignUp
          </Link>
        </Flex>

        {/* Right - Search + Wishlist + Cart */}
        <Flex flex="1" justify="flex-end" align="center" gap={4}>
          <InputGroup minW="243px" size="md" minH={"38px"}>
            <Input
              placeholder="What are you looking for?"
              bg="gray.100"
              pl={"20px"}
              pr={"12px"}
              py={"8px"}
              _placeholder={{
                color: "gray.500",
                fontSize: "xs",
                textAlign: "sta",
              }}
              _focus={{
                borderColor: "black",
                boxShadow: "0 0 0 1px black",
              }}
            />
            <InputRightElement pointerEvents="painted">
              <BiSearch fontSize={"18px"} color="gray.500" />
            </InputRightElement>
          </InputGroup>

          <Icon as={IoIosHeartEmpty} boxSize={6} cursor="pointer" />
          <Icon as={IoCartOutline} boxSize={6} cursor="pointer" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
