import { z } from "zod";

/**
 * プロジェクトの内部から使用されるENVを定義する
 *
 * 利点
 * 　envにて undefinedが発生する時、エラーが出るのですぐわかりやすい。
 * 　envを使用する所で検証ロジックが要らない
 * 　オートコンプリートができるのでわざとenvファイルを探す必要がない
 */

// 定義
const envVariables = z.object({
  NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT: z.string(),
  HASURA_ADMIN_SECRET: z.string(),
  HASURA_JWT_SECRET_TYPE: z.string(),
  HASURA_JWT_SECRET_KEY: z.string(),
});

// 検証
envVariables.parse(process.env);

/**
 * 作成した EnvVariables のオートコンプリート(Autocomplete)ができるように全域で設定
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
