import type { NextApiRequest, NextApiResponse } from "next";
import { initTRPC } from "@trpc/server";

interface ContextParams {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const createContext = async ({ req, res }: ContextParams) => ({
  req,
  res,
});

export const trpc = initTRPC.context().create();
