import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  UseRadioGroupProps,
  UseRadioProps,
} from "@chakra-ui/react";

type CustomRadioGroupProps = {
  radioOptions: { value: string; label: string }[];
} & UseRadioGroupProps;
type RadioCardProps = {
  children: React.ReactNode;
} & UseRadioProps;

export const CustomRadioGroup: React.FC<CustomRadioGroupProps> = (props) => {
  const { radioOptions, ...radioGroupProps } = props;
  const { getRootProps, getRadioProps } = useRadioGroup(radioGroupProps);
  return (
    <HStack
      as="fieldset"
      display="flex"
      px="1rem"
      py="0.8rem"
      borderWidth="0.4px"
      borderRadius="0.5rem"
      {...getRootProps()}
    >
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
