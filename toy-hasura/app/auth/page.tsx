"use client";

import { Form } from "@/components/form/Form";
import { CustomRadioGroup } from "@/components/Input/Radio";
import { useStore } from "@/store/store";
import {
  Button,
  Flex,
  FormControlProps,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

type AuthSwitch = "login" | "signup";

const INTENTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
};

type Props = {};

const shouldLogin = (intention: string) => intention === INTENTIONS.LOGIN;
const shouldSignup = (intention: string) => intention === INTENTIONS.SIGNUP;

export default function Auth() {
  const [authSwith, setAuthSwith] = useState<AuthSwitch>("login");

  return (
    <Flex as="section" direction="column" gap="1rem" px="1rem">
      <h1> Auth page {authSwith}</h1>

      <CustomRadioGroup
        name="login and signup"
        defaultValue={authSwith}
        onChange={setAuthSwith as ((nextValue: string) => void) | undefined}
        radioOptions={[
          { value: "login", label: "Login" },
          { value: "signup", label: "Signup" },
        ]}
      />

      {authSwith === "login" && <LoginForm />}
      {authSwith === "signup" && <SignupForm />}

      <hr />
    </Flex>
  );
}

const SignupForm: React.FC<FormControlProps> = (props) => {
  const { signup } = useStore();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    signup({ username, password });
  };
  return (
    <Form onSubmit={handleSubmit} {...props}>
      <FormLabel htmlFor="name">あなたのお名前は?</FormLabel>
      <Input
        placeholder="名前"
        type="name"
        id="name"
        value={username}
        onChange={(e) => {
          const currentUsername = e.currentTarget.value;
          setUsername(currentUsername);
        }}
        isRequired
      />
      <FormLabel>パスワードは?</FormLabel>
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          const currentPassword = e.currentTarget.value;
          setPassword(currentPassword);
        }}
        isRequired
      />

      <Button
        type="submit"
        w="fit-content"
        colorScheme="teal"
        variant="solid"
        my="1rem"
      >
        Signup
      </Button>
    </Form>
  );
};

const LoginForm: React.FC<FormControlProps> = (props) => {
  const { login } = useStore();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    login({ username, password });
  };
  return (
    <Form onSubmit={handleSubmit} {...props}>
      <FormLabel htmlFor="name">あなたのお名前は?</FormLabel>
      <Input
        placeholder="名前"
        type="name"
        id="name"
        value={username}
        onChange={(e) => {
          const currentUsername = e.currentTarget.value;
          setUsername(currentUsername);
        }}
        isRequired
      />
      <FormLabel>パスワードは?</FormLabel>
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          const currentPassword = e.currentTarget.value;
          setPassword(currentPassword);
        }}
        isRequired
      />

      <Button
        type="submit"
        w="fit-content"
        colorScheme="teal"
        variant="solid"
        my="1rem"
      >
        Login
      </Button>
    </Form>
  );
};
