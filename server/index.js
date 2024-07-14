require("express-async-errors");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { body, validationResult } = require("express-validator");

const authRouter = require("./routes/authRouter");
const campaignRouter = require("./routes/campaignRouter");
const paymentRouter = require("./routes/paymentRouter");
const userRouter = require("./routes/userRouter");
<<<<<<< HEAD
const transRouter = require("./routes/transactionRouter")
=======
const productRouter = require("./routes/productRouter");
>>>>>>> d443816949f88c2c90f3bac77528c61efda801d5

const {
  authenticateUser,
  errorHandlerMiddleware,
  authenticateDeveloper,
} = require("./middleware");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

const corsOptions = {
  // origin: "http://localhost:5173",
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/transactions", authenticateUser, transRouter)
app.use("/api/v1/payments", paymentRouter);
app.use("/api/v1/campaigns", authenticateUser, campaignRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use(
  "/api/v1/product",
  authenticateUser,
  authenticateDeveloper,
  productRouter
);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);
const port = process.env.PORT || 8080;

try {
  app.listen(port, () => {
    console.log(`server running on port ${port} . . .`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
