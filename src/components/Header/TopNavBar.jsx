import { Box, Flex, Text, Link, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const TopNavBar = () => {
  return (
    <Box minH="48px" bg="black" px={{ base: 4, md: 10, lg: 20, xl: "140px" }}>
      <Flex
        align="center"
        justify="space-between"
        minH="48px"
        color="white"
        fontSize={{ base: "xs", md: "sm" }}
        wrap="wrap"
      >
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          gap={2}
          textAlign="center"
          flexWrap="wrap"
        >
          <Text>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </Text>
          <Link
            color="white.2"
            fontWeight="semibold"
            textUnderlineOffset={1}
            href="#"
          >
            Shop Now
          </Link>
        </Box>

        {/* Right-aligned language selector */}
        <Stack
          direction="row"
          spacing={1}
          align="center"
          mt={{ base: 2, md: 0 }}
          justify={{ base: "center", md: "flex-end" }}
          w={{ base: "100%", md: "auto" }}
          py={2}
        >
          <Text>English</Text>
          <Icon fontSize={"md"} fontWeight={"bold"} as={IoIosArrowDown} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default TopNavBar;
