// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from "@mswjs/http-middleware";
import { handlers } from "./handlers";
export const server = createServer(...handlers);

server.listen(7073);
