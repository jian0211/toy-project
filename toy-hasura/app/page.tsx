import { getClient } from "@/lib/client";
import { GetFriendsDocument } from "@/graphql/generated/graphql";
import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default async function Home() {
  const { data, loading, error } = await getClient().query({
    query: GetFriendsDocument,
    fetchPolicy: "no-cache",
  });

  if (loading) return <div>loadding...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      gap="2rem"
      pt="2rem"
    >
      <Heading as="h1">
        Welcome to BYP!
        <br /> The number one place for backyard
        <br /> pizza with YOUR friends.
      </Heading>
      <Text as="p">
        if you're new here, you probably need to&nbsp;
        <Link
          as={NextLink}
          href="./auth"
          textDecoration="underline"
          fontWeight="semibold"
          _hover={{ color: "green" }}
        >
          Sign or Login
        </Link>
        , or you need to scan a party code to get going!
      </Text>

      <Heading as="h3" size="lg">
        Pizza Lovin' Patrons include...
      </Heading>
      <HStack>
        {data.friend.map((friend) => (
          <Flex
            key={friend.name}
            w="8rem"
            h="8rem"
            justifyContent="center"
            alignItems="center"
            borderWidth="1px"
            borderRadius="lg"
          >
            <Text>{friend.name}</Text>
          </Flex>
        ))}
      </HStack>
    </Box>
  );
}
