import pkg from "@react-router/node";
const { createRequestHandler } = pkg;
import type { Context } from "@netlify/functions";

// @ts-expect-error - virtual module from build
import * as serverBuild from "../../build/server/index.js";

const handler = createRequestHandler(serverBuild, "production");

export default async (request: Request, _context: Context) => {
  return handler(request);
};
