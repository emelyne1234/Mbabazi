import express from "express";
import mongoose from "mongoose";

// creating  an instance of the express server
const app = express();


app.get("/todos", (request, response) => {
    response.status(200).send({
        count: todos.length,
        data: todos
    })
})

app.get("/todos/:id", (req, res) => {
    const identifier = parseInt(req.params.id);
    let foundTodo = todos.find((todo) => {
        return todo.id === identifier;
    })
    if (foundTodo) {
        res.status(200).send(foundTodo)
    } else {
        res.status(404).send("Todo not found");
    }

})
mongoose.connect("mongodb://localhost:27017/todoDB").then(()=>{
    console.log("Connected to database");
});
// Argument: port and function that is executed when the server start running
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
