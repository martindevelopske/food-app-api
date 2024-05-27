const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./src/config/db.js");

//dot en configuration
dotenv.config();

//DB connection
connectDb();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
// URL => http://localhost:8080
app.use("/api/v1/test", require("./src/routes/testRoutes"));
app.use("/api/v1/auth", require("./src/routes/authRoutes"));
app.use("/api/v1/user", require("./src/routes/userRoutes"));
app.use("/api/v1/resturant", require("./src/routes/resturantRoutes"));
app.use("/api/v1/category", require("./src/routes/catgeoryRoutes"));
app.use("/api/v1/food", require("./src/routes/foodRoutes"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send(
      "<h1>Welcome to Food Server APP API. You can use postman to test the routes</h1>"
    );
});

//PORT
const PORT = process.env.PORT || 4000;

//listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});
