import express, { request, response } from "express";

const app = express();

app.use(express.json());

const loggingMiddlewar = (request, response, next) => {
  console.log(`${request.method}-${request.url}`);
  next();
};

const resolveIndexByUserID = (request, response, next) => {
  const {
    params: { id },
  } = request;
  const parsedID = parseInt(id);
  if (isNaN(parsedID)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedID);

  if (findUserIndex === -1) return response.sendStatus(404);
  request.findUserIndex = findUserIndex;
  next();
};

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "anson", displayName: "Anson" },
  { id: 2, username: "jack", displayName: "Jack" },
  { id: 3, username: "tina", displayName: "Tina" },
  { id: 4, username: "jason", displayName: "Jason" },
  { id: 5, username: "henry", displayName: "Henry" },
  { id: 6, username: "marilyn", displayName: "Marilyn" },
  { id: 7, username: "adam", displayName: "Adam" },
];

app.get("/", loggingMiddlewar, (request, response) => {
  response.status(201).send({ msg: "HELLO" });
});

app.get("/api/users", (request, response) => {
  console.log(request.query);
  const {
    query: { filter, value },
  } = request;
  if (filter && value)
    return response.send(
      mockUsers.filter((user) => {
        return user[filter].includes(value);
      })
    );
  return response.send(mockUsers);
});

app.post("/api/users", (request, response) => {
  const { body } = request;
  console.log(request.body);
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
  mockUsers.push(newUser);
  return response.status(201).send(newUser);
});

app.get("/api/users/:id", resolveIndexByUserID, (request, response) => {
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});

app.put("/api/users/:id", resolveIndexByUserID, (request, response) => {
  const { body, findUserIndex } = request;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return response.sendStatus(200);
});

app.patch("/api/users/:id", resolveIndexByUserID, (request, response) => {
  const { body, findUserIndex } = request;
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(200);
});

app.delete("/api/users/:id", resolveIndexByUserID, (request, response) => {
  const {
    params: { id },
    findUserIndex,
  } = request;
  mockUsers.splice(findUserIndex, 1);
  return response.sendStatus(200);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
