import { Link as _Link, LinkProps as _LinkProps } from "@chakra-ui/next-js";
import { Flex, FlexProps } from "@chakra-ui/react";
import NextLink from "next/link";

type NavContainerProps = {} & FlexProps;
type LinkProps = {} & _LinkProps;

const NavContainer: React.FC<NavContainerProps> = (props) => {
  return (
    <Flex
      as="nav"
      height="4rem"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      {...props}
    />
  );
};

const Link: React.FC<LinkProps> = (props) => {
  return (
    <_Link
      as={NextLink}
      width="4rem"
      height="2rem"
      lineHeight="2rem"
      textAlign="center"
      _hover={{
        background: "gray",
        color: "white",
      }}
      {...props}
    />
  );
};

export const Nav = Object.assign(NavContainer, { Link });
