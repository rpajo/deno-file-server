FROM denoland/deno:latest

EXPOSE 8000

WORKDIR /app

COPY deno.json .
COPY main.ts .
COPY static ./static

RUN deno install --entrypoint main.ts

CMD ["deno", "run", "--allow-net", "--allow-read=./static", "main.ts"] 