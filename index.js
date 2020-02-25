const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const { logger } = require("./middleware/logger");
const { connectDB } = require("./config/db");

const app = express();

// load env config
dotenv.config({ path: `${path.resolve(__dirname)}/config/config.env` });

// connect to DB
connectDB();

// Route files
const bootcamps = require(`${path.resolve(__dirname)}/routes/bootcamps.js`);

// helmet adds security headers
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));

// if development, use logging
process.env.NODE_ENV === "development" ? app.use(logger) : process.env;

// mount routes
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT ? process.env.PORT : 5000;
const server = app.listen(PORT, () =>
    console.log(
        `Server is listening on port: ${PORT} in ${process.env.NODE_ENV} environment`
    )
);

// global handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    // close server and exit process
    server.close(() => process.exit(1));
});
