const express = require("express");
const helmet = require("helmet");

const app = express();

// helmet adds security headers
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
