import { createNextApiHandler } from "@trpc/server/adapters/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { createContext } from "@server/index";
import { router } from "@server/router";
import { connectToDatabase } from "@server/utils";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  await connectToDatabase();
  return createNextApiHandler({ router, createContext })(request, response);
};

export default handler;
