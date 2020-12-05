# GitK

GitK is a mock server with a fancy dashboard for local development. 

## Key Features
- mock API with several responses
- switch responses on dashboard
- mock response time

## Quick start

To get start, make a new directory and install the package:
```
mkdir mock && cd mock
npm init
npm install git-k
```
create a index.js file and create a new instance of GitK:
```
import { GitK } from 'git-k'
const mock = new GitK();
``` 
defined a route with handler:
```
mock.route({
  name: "Get Users",
  path: "/api/users",
  method: "GET",
  handlers: [
    {
      name: "success",
      status: 200,
      handler: (request, response) => {
        return [{name: 'Tom',age: '12'},{name:'Jerry', age:'10'}];
      },
    },
    {
      name: "fail",
      status: 400,
      handler: (request, response) => {
        return [];
      },
    },
  ],
});
```
defined other routes:
```
mock.route({...});
mock.route({...});
mock.route({...});
```
after you have defineded all routes, don't forget to start the mock server:
```
mock.start(3000);
```
then go to terminal, and run:
```
$ node index.js
> GitK mock server is running on http://localhost:3000
```
all done !!!


