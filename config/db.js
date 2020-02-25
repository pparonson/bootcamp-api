const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`Connected: ${conn.connection.host}`);

    // const db = mongoose.connection;
    // db.on("error", console.error.bind(console, "connection error:"));
    // db.once("open", function() {
    //     console.log(`Connected: ${conn.connection.host}`);
    // });
};

module.exports = { connectDB };
