const express = require("express");
const accounts = require("./accounts");
const uuid4 = require("uuid4");

const app = express();
app.use(express.json());

app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
  res.status(400).json({ message: "Bad Requrest" });
});

app.get("/accounts/:accountsId", (req, res) => {
  const findId = accounts.find(
    (account) => account.id === +req.params.accountsId
  );
  if (!findId) res.status(404).json({ message: "not find" });
  res.status(200).json(findId);
});

app.post("/accounts", (req, res) => {
  const newAccount = {
    id: uuid4(),
    ...req.body,
  };
  accounts.unshift(newAccount);
  res.status(201).json(newAccount);
});

app.put("/accounts/:accountsId", (req, res) => {
  const findId = accounts.find(
    (account) => account.id === req.params.accountsId
  );
  if (!findId) res.status(400).json({ message: "not find" });
  res.status(200).json(findId);

  const { username, funds } = req.body;

  if (!username || !funds) res.status(400).json({ message: "Bad Requrest" });
  findId.username = username;
  findId.funds = funds;

  //res.status(204).end()
  res.status(200).json(foundCat);
});

app.delete("/accounts/:accountsId", (req, res) => {
  const findId = accounts.find(
    (account) => account.id === req.params.accountsId
  );
  if (!findId) res.status(400).json({ message: "not find" });
  res.status(200).json(findId);

  const accountsIndex = accounts.findIndex(
    (account) => account.id === req.params.accountsId
  );
  accounts.splice(accountsIndex, 1);

  res.status(204).end();
});

app.get("/accounts/:accountsName", (req, res) => {
  const findName = accounts.find(
    (account) =>
      account.username.toLocaleLowerCase() ===
      req.params.accountsName.toLocaleLowerCase()
  );
  if (!findName) res.status(404).json({ message: "not find" });
  res.status(200).json(findName);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`the app is running in the port http://localhost:${PORT}`);
});
