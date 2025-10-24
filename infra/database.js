import { Client } from "pg";

async function query(queryObject) {
  let client;

  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

async function getNewClient(queryObject) {
  const client = new Client({
    connectionString:
      "postgresql://neondb_owner:npg_RToH3ZGjYux9@ep-holy-bar-a4uam9es-pooler.us-east-1.aws.neon.tech/staging?sslmode=require&channel_binding=require",
  });
  await client.connect();
  return client;
}

export default {
  query,
  getNewClient,
};
