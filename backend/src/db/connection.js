const mongoose = require("mongoose")

const connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:RIXtCtxGb4owMEAi@cluster0.qptgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = connection