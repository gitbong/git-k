import GitK from "./GitK";

const app = new GitK();
app.route({
  name: "api 1",
  path: "/pages/goods",
  method: "GET",
  handlers: [
    {
      name: "success",
      status: 500,
      handler: ({ query: { a } }) => {
        return { a, b: 1 };
      },
    },
    {
      name: "fail",
      status: 400,
      handler: ({ query: { a } }) => {
        return { a, b: 33 };
      },
    },
    {
      name: "500",
      status: 500,
    },
  ],
});
app.route({
  name: "api 2",
  path: "/pages/goods",
  method: "POST",
  handlers: [
    {
      name: "success",
      handler: ({ body }) => {
        return body;
      },
    },
  ],
});

app.start();
