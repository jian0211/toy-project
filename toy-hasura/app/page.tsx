import { getClient } from "@/lib/client";
import styles from "./page.module.css";
import { gql } from "@apollo/client";

const GET_FRIENDS = gql`
  query GetFriends {
    friend {
      name
    }
  }
`;

export default async function Home() {
  const { data, loading, error } = await getClient().query({
    query: GET_FRIENDS,
  });

  if (loading) return <div>loadding...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className={styles.main}>
      {data.friend.map((friend, i) => (
        <p key={i}>{friend.name}</p>
      ))}
    </main>
  );
}
