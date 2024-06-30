import { createTRPCProxyClient, httpLink } from "@trpc/client";
import type { AppRouter } from "@server/router";
import { BACKEND_URL } from "@app/constants";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: BACKEND_URL,
    }),
  ],
});
