const cakesController = require("../controllers/cakes.js")

module.exports = function (app) {
    app.get("/cakes", cakesController.index) // view all cakes
    app.get("/cakes/:id", cakesController.taskById) // Pull specific cake
    app.post("/cakes", cakesController.create) // Create cake
    app.put("/cakes/:id", cakesController.update) //attach comment and rating to cake
    // app.delete("/tasks/:id", tasksController.delete)
    app.get("/*", function (req, res) {
        res.json({ message: "catch all" })
    })
}

