const express = require("express");
const accountRouter = require("./api/accounts/router");

const app = express();
app.use(express.json());
app.use("/accounts", accountRouter);

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`the app is running in the port http://localhost:${PORT}`);
});
