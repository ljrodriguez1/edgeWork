import { createClient } from "@libsql/client";

export function getTurso() {
  if (!process.env.NUXT_TURSO_DB_URL || !process.env.NUXT_TURSO_DB_AUTH_TOKEN) {
    throw new Error(
      "Please fill the NUXT_TURSO_DB_URL and NUXT_TURSO_DB_AUTH_TOKEN env variables"
    );
  }

  return createClient({
    url: "file:local.db",
    syncUrl: process.env.NUXT_TURSO_DB_URL,
    authToken: process.env.NUXT_TURSO_DB_AUTH_TOKEN,
  });
}
