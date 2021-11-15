const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

/**
 * Rate Limiting
 */
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 5,
});
app.use(limiter);
app.set("trust proxy", 1);

/**
 * set static folder
 */

app.use(express.static("public"));

/**
 * Routes
 */

app.use("/api", require("./routes"));

/**
 * Enable Cors
 */
app.use(cors());

/**
 * Port listen
 */

app.listen(PORT, () => console.log(`Server running on port ${PORT} en nZoump`));
