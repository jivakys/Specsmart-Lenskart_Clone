const express = require("express");
const { connection } = require("./configs/db.config");
const cors = require("cors");
const { userRoute } = require("./routes/user.route");
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use("/users", userRoute);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Database is connected");
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server Running at ${process.env.port}`);
});
