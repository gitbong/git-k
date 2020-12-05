import GitK from "./GitK";

const app = new GitK();
app.route({
  name: "GitK is a mock",
  path: "/pages/goods",
  method: "GET",
  handlers: [
    {
      name: "GitK is a mock server",
      status: 500,
      handler: (req, res) => {
        const {
          query: { a },
        } = res;
        req.status(300);
        return { a, b: 1 };
      },
    },
    {
      name: "fail",
      status: 400,
      handler: (req, { query: { a } }) => {
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
  name: "with a fancy dashboard",
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
