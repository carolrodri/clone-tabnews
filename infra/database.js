/* eslint-disable no-unused-vars */
import { Client } from "pg";
import { ServiceError } from "./erros.js";

async function query(queryObject) {
  let client;

  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    const ServiceErrorObject = new ServiceError({
      message: "Erro na conexão com Banco ou na Query.",
      cause: error,
    });
    throw ServiceErrorObject;
  } finally {
    await client?.end();
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
