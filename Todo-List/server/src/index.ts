import express from "express";
import { prisma } from "./utils/prisma";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const allTodo = await prisma.todo.findMany({});
  res.send(allTodo);
});

app.post("/", async (req, res) => {
  const { title } = req.body;
  const newTodo = await prisma.todo.create({
    data: { title },
  });
  res.send(newTodo);
});

// app.get("/:id", async (req, res) => {
//   const Todo = await prisma.todo.findUnique({
//     where: { id: Number(req.params.id) },
//   });
//   res.send(Todo);
// });

app.delete("/:id", async (req, res) => {
  const deleteTodo = await prisma.todo.delete({
    where: { id: Number(req.params.id) },
  });
  res.send(deleteTodo);
});

// app.post("/:id", async (req, res) => {
//   const updateTitle = req.body.title;
//   const updateTodo = await prisma.todo.update({
//     where: { id: Number(req.params.id) },
//     data: { title: updateTitle },
//   });
//   res.send(updateTodo);
// });

// app.post("/completed/:id", async (req, res) => {
//   const completed = req.body.completed;
//   const updateTodo = await prisma.todo.update({
//     where: { id: Number(req.params.id) },
//     data: { completed: completed },
//   });
//   res.send(updateTodo);
// });

app.listen(5000, () => {
  console.log(`Server is running on ${PORT}`);
});
