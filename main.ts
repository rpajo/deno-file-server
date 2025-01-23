import { type Route, route } from "@std/http/unstable-route";
import { serveDir } from "@std/http/file-server";

const routes: Route[] = [
  {
    pattern: new URLPattern({ pathname: "/" }),
    handler: () => new Response("File server live 💚"),
  },
  {
    pattern: new URLPattern({ pathname: "/static/*" }),
    handler: (req: Request) => serveDir(req)
  },
];

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

Deno.serve(route(routes, defaultHandler));
