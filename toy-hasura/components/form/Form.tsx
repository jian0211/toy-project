import { FormControl, FormControlProps } from "@chakra-ui/react";

/**
 * スタイルをテーマとしてかんりしてみたら。。？
 */

export const Form: React.FC<FormControlProps> = (props) => {
  return (
    <FormControl
      as="form"
      display="flex"
      flexDirection="column"
      px="1rem"
      {...props}
    />
  );
};
