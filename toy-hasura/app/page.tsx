import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const test = await getFriend();
  const friends = test!.props.friends;
  return (
    <main className={styles.main}>
      {friends.map((friend, i) => (
        <p key={i}>{friend.name}</p>
      ))}
    </main>
  );
}

export const getFriend = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
      {
        method: "POST",
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
        },
        body: JSON.stringify({
          query: `query {
          friend {
            name
          }
        }`,
        }),
      }
    );

    const result = await response.json();
    return {
      props: {
        friends: result.data.friend,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
