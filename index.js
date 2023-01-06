const express = require("express");
const { connectDb } = require("./DB/connection");
const app = express();
const PORT = 3000;
app.use(express.json());
connectDb();
const userRouter = require("./modules/user/user.router");
//to use the router
app.use("/users/", userRouter);

app.get("*", (req, res) => {
  res.json({ message: "page not found " });
});
app.listen(PORT, () =>
  console.log(`EXAMPLE APP IS LISTINING ON PORT ${PORT} `)
);
