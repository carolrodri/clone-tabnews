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
    connectionString: process.env.POSTGRES_URL,
  });
  await client.connect();
  return client;
}

const database = {
  query,
  getNewClient,
};

export default database;
