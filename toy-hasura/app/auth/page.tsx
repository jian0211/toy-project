"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  useRadio,
  useRadioGroup,
  UseRadioGroupProps,
  UseRadioProps,
} from "@chakra-ui/react";
import { useState } from "react";

type AuthSwitch = "login" | "signup";
type CustomRadioGroupProps = {
  radioOptions: { value: string; label: string }[];
} & UseRadioGroupProps;
type RadioCardProps = {
  children: React.ReactNode;
} & UseRadioProps;

export default function Auth() {
  const [authSwith, setAuthSwith] = useState<AuthSwitch>("login");

  return (
    <div>
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

      <FormControl as="form">
        <FormLabel htmlFor="email">あなたのお名前は?</FormLabel>
        <Input placeholder="名前" type="email" id="email" isRequired />
        <FormLabel>パスワードは?</FormLabel>
        <Input type="password" isRequired />

        <Button type="submit" colorScheme="teal" variant="solid">
          {authSwith.toUpperCase()}
        </Button>
      </FormControl>

      <hr />
    </div>
  );
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = (props) => {
  const { radioOptions, ...radioGroupProps } = props;
  const { getRootProps, getRadioProps } = useRadioGroup(radioGroupProps);
  return (
    <HStack as="fieldset" {...getRootProps()}>
      {radioOptions.map(({ value, label }) => (
        <RadioCard key={value} {...getRadioProps({ value })}>
          {label}
        </RadioCard>
      ))}
    </HStack>
  );
};

const RadioCard: React.FC<RadioCardProps> = (props) => {
  const { children, ...radioProps } = props;
  const { getInputProps, getRadioProps } = useRadio(radioProps);

  return (
    <Box
      as="label"
      cursor="pointer"
      borderRadius="md"
      boxShadow="md"
      _checked={{
        bg: "teal.600",
        color: "white",
        borderColor: "teal.600",
      }}
      _focus={{ boxShadow: "outline" }}
      _hover={{ bg: "teal.200" }}
      px={5}
      py={1}
      {...getRadioProps()}
    >
      {props.children}
      <input {...getInputProps()} hidden />
    </Box>
  );
};
