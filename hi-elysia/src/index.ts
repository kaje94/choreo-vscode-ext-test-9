import { Elysia } from "elysia";

const app = new Elysia()
    .get('/:name', ({ params: { name } }) => {
      console.log("Running ... "+name)
      return "success"
    })
    .listen(8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
