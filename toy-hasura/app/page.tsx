import { getClient } from "@/lib/client";
import styles from "./page.module.css";
import { GetFriendsDocument } from "@/graphql/generated/graphql";
import { Box, Link } from "@chakra-ui/react";

export default async function Home() {
  // const { data, loading, error } = await getClient().query({
  //   query: GetFriendsDocument,
  //   fetchPolicy: "no-cache",
  // });

  // if (loading) return <div>loadding...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <main className={styles.main}>
      <Link href="./auth">Sign or Login</Link>
      <Box bg="green">This is Chakra-ui Component</Box>
      {/* {data.friend.map((friend, i) => (
        <p key={i}>{friend.name}</p> */}
      {/* ))} */}
    </main>
  );
}
