require("dotenv").config();
require("express-async-errors");
const express = require("express");

//connect DB
const connectDB = require("./db/connect");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

// routes
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// extra packages

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB');
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
