const mongoose = require("mongoose")

async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected Successfully");

    } catch (error) {
        console.log(err);

    }


}

module.exports = connectToDB