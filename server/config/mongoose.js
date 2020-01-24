
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/rate_my", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

require("../models/Cake")
require("../models/comment")