import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import client from "@/app/api/_utils/client";
import checkMessage from "@/lib/checkMessage";
import {
  InsertFriendMutation,
  InsertFriendDocument,
  InsertFriendMutationVariables,
} from "@/graphql/generated/graphql";

const notUnique = checkMessage("Uniqueness violation");

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { username, password }: { username?: string; password: string } =
    req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  client
    .mutation<InsertFriendMutation, InsertFriendMutationVariables>(
      InsertFriendDocument,
      {
        username,
        password: hashedPassword,
      }
    )
    .toPromise()
    .then((result) => {
      if (result?.error) {
        if (notUnique(result.error.graphQLErrors)) {
          return res.status(400).json({ message: "Not permitted." });
        } else {
          console.log("Bad Query.", result.error.graphQLErrors);
          return res.status(400).json({ message: "Error with query." });
        }
      } else {
        const user = result.data?.insert_friend_one;
        if (!user) {
          return res.status(400).json({ message: "Someting went wrong." });
        }
      }
    });

  return Response.json({ data: "test Signup" });
}
