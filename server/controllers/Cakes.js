const Comment = require("mongoose").model("Comment")
const Cake = require("mongoose").model("Cake")

module.exports = {
    index(_req, res) {
        Cake.find()
            .then(cakes => {
                res.json({ cakes: cakes })
                console.log(req.body)
            })
            .catch(err => {
                res.json({ err })
            })
    },
    taskById(req, res) {
        console.log("req.params: ", req.params)
        Cake.findById({ _id: req.params.id })
            .then(cakes => {
                console.log("cakes: ", cakes.Name)
                res.json({ cakes })
            })
            .catch(err => {
                res.json({ err })
            })
    },
    create(req, res) {
        Cake.create(req.body) // create is mongodb command to make a new entry to database. Using client request 
            .then(cakes => {
                res.json(cakes)
            })
            .catch(err => {
                res.json(err)
            })
    },

    update(req, res) {
        Comment.create(req.body) //.then is always waiting for response from database
            .then(comment => { //lowercase comment is the return from the database and then enters function
                Cake.findOneAndUpdate( //Search through database again in another schema, find one and update takes in two arguments
                    { _id: req.params.id }, //first argument
                    { $push: { comments: comment } } //second argument
                )
                    // .then(updatedCake => {  // updatedCake is the return of the database
                    //     //.then waiting from response in database happens again
                    //     // updatedCake.updated_at = Date.now();
                    // })

                    .then(comment => res.json(comment)) // return Json of data query for comment
                    // if .then does not return something you will be returned an error.
                    .catch(err => { // if second .then failed .catch is run
                        res.json(err);
                    });
            })
            // .then(comment => res.json(comment)) // return Json of data query for comment
            .catch(err => {
                res.json(err);
            });
    }
}