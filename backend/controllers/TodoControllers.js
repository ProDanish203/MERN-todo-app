const TodoModel = require("../models/TodoModel");

module.exports.getTodos = async (req, res) => {

    const todos = await TodoModel.find();
    res.send(todos);
    // res.send("Getting data");

}

module.exports.addTodo = (req, res) => {
    
    const { todo } = req.body;

    TodoModel.create({todo})
    .then((data) => {
        console.log("Todo Added");
        res.status(201).send(data);
    })
    .catch((e) => {
        console.log(e);
        res.send({ error: e, message: "Something went wrong..."})
    })

}


module.exports.updateTodo = (req, res) => {
    
    const { id } = req.params;
    const { todo } = req.body;

    TodoModel.findByIdAndUpdate(id, {todo})
    .then(() => {
        res.send("Todo Updated");
    })
    .catch((e) => {
        console.log(e);
        res.send({ error: e, message: "Something went wrong..."})
    })

}


module.exports.deleteTodo = (req, res) => {
    
    const { id } = req.params;

    TodoModel.findByIdAndDelete(id)
    .then(() => {
        console.log("Todo Deleted");
    })
    .catch((e) => {
        console.log(e);
        res.send({ error: e, message: "Something went wrong..."})
    })

}