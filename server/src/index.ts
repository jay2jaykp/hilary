import express from "express";
import { prisma } from "./utils/prisma";
import cors from "cors";

const app = express();
const PORT = 3001;

// add middleware that can parse the json data in request body
// cors should only be used in development
app.use(cors());

app.use(express.json());

// API Endpoints for our CRUD operations

// 1. Fetch ALL ToDos
app.get("/", async (req, res) => {
  const allTodo = await prisma.todo.findMany();
  res.send(allTodo);
});

app.post("/", async (req, res) => {
  const { title } = req.body;
  const newTodo = await prisma.todo.create({
    data: {
      title,
    },
  });

  res.send(newTodo);
});

// 2. Fetch specific ToDo
// params
app.get("/:id", async (req, res) => {
  const Todo = await prisma.todo.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  res.send(Todo);
});

// 3. Delete a specific Todo
app.delete("/:id", async (req, res) => {
  const deleteTodo = await prisma.todo.delete({
    where: {
      id: Number(req.params.id),
    },
  });

  res.send(deleteTodo);
});

// 4. Update existing Todo
app.post("/:id", async (req, res) => {
  const updatedTitle = req.body.title;
  const updateTodo = await prisma.todo.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      title: updatedTitle,
    },
  });

  res.send(updateTodo);
});

// 5. Update the completion value
app.post("/completed/:id", async (req, res) => {
  console.log("I am updating completed column");
  const incomingValue = req.body.completed;
  const updateTodo = await prisma.todo.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      completed: incomingValue,
    },
  });

  res.send(updateTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
