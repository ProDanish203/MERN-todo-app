// importing the Router from express
const { Router } = require("express")

// importing the methods from controllers
const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/TodoControllers")

// Setting up the router
const router = Router();


// Using the imported methods with routes
router.get("/todos", getTodos);
router.post("/new", addTodo);
router.put("/edit/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);



// Exporting the router
module.exports = router;