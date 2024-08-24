import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export enum AUTH {
  AUTHED = "authed",
  NOT_AUTHED = "not_authed",
}

type LocalUser = {
  authed: AUTH;
  id?: string;
  token?: string | null;
  username?: string;
};

type UserNameWithPassword = {
  username: string;
  password: string;
};

interface Byp {
  user: LocalUser;
  signup: (props: UserNameWithPassword) => void;
  login: (props: UserNameWithPassword) => void;
  logout: () => void;
}

export const useStore = create<Byp>()(
  devtools(
    persist(
      (set, get) => ({
        user: { authed: AUTH.NOT_AUTHED },
        signup: ({ password, username }) => {
          console.log(`Signup user ${username}`);
        },
        login: ({ password, username }) => {
          console.log(`Login user ${username}`);
        },
        logout: () => {
          set({ user: { authed: AUTH.NOT_AUTHED } });
        },
      }),
      { name: "byp", getStorage: () => localStorage }
    )
  )
);
