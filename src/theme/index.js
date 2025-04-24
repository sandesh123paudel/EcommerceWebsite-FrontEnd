// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },

  colors: {
    brand: {
      50: "#FFE8E8",
      100: "#FCBABA",
      200: "#F38A8A",
      300: "#EA5A5A",
      400: "#E12A2A",
      500: "#C90000",
      600: "#A10000",
      700: "#790000",
      800: "#510000",
      900: "#290000",
    },
    gray: {
      50: "#F9F9F9",
      100: "#F0F0F0",
      200: "#D9D9D9",
      300: "#BFBFBF",
      400: "#A6A6A6",
      500: "#8C8C8C",
      600: "#737373",
      700: "#595959",
      800: "#404040",
      900: "#262626",
    },
    black: "#000000",
    white: {
      1: "#FFFFFF",
      2: "#FAFAFA",
    },
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "36px",
    "6xl": "48px",
  },

  textStyles: {
    h1: {
      fontWeight: "bold",
      fontSize: ["30px", "32px"],
      lineHeight: ["34px", "36px"],
    },
    h2: {
      fontWeight: "semibold",
      fontSize: ["24px", "28px"],
      lineHeight: ["28px", "32px"],
    },
    h3: {
      fontWeight: "semibold",
      fontSize: ["22px", "24px", "32px"],
      lineHeight: ["26px", "28px", "36px"],
    },
    h4: {
      fontWeight: "semibold",
      fontSize: ["20px", "22px"],
      lineHeight: ["24px", "26px"],
    },
    h5: {
      fontWeight: "medium",
      fontSize: ["18px", "20px"],
      lineHeight: ["22px", "24px"],
    },
    h6: {
      fontWeight: "medium",
      fontSize: ["16px", "18px"],
      lineHeight: ["20px", "22px"],
    },
  },

  styles: {
    global: {
      body: {
        bg: "white.1",
        color: "gray.900",
      },
      a: {
        color: "brand.400",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "md",
      },
      sizes: {
        md: {
          px: 6,
          py: 3,
        },
      },
      variants: {
        solid: {
          bg: "brand.400",
          color: "white",
          _hover: {
            bg: "brand.500",
          },
        },
        outline: {
          border: "2px solid",
          borderColor: "brand.400",
          color: "brand.400",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },
  },
});

export default theme;
