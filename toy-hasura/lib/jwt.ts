import * as jwt from "jsonwebtoken";

type GenerateJWTParams = {
  otherClaims?: Record<string, string | string[]>;
};

const HASURA_GRAPHQL_JWT_SECRET = {
  type: process.env.HASURA_JWT_SECRET_TYPE,
  key: process.env.HASURA_JWT_SECRET_KEY,
};

const getValidAlgorithm = (value: string): "HS256" | "RS512" => {
  if (value === "HS256" || value === "RS512") {
    return value;
  } else {
    throw new Error("Value is not a HS256, RS512.");
  }
};

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: getValidAlgorithm(HASURA_GRAPHQL_JWT_SECRET.type),
  expiresIn: "10h",
};

export const generateJWT = (params: GenerateJWTParams): string => {
  const payload = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-default-role": "user",
      ...params.otherClaims,
    },
  };
  return jwt.sign(payload, HASURA_GRAPHQL_JWT_SECRET.key, JWT_CONFIG);
};
