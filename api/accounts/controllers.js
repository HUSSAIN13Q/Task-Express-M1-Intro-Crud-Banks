const accounts = require("../../accounts");
const uuid4 = require("uuid4");

exports.accountLast = function (req, res) {
  res.status(200).json(accounts);
  res.status(400).json({ message: "Bad Request" });
};

exports.findAccounts = function (req, res) {
  const findId = accounts.find(
    (account) => account.id === +req.params.accountsId
  );
  if (!findId) res.status(404).json({ message: "not find" });
  res.status(200).json(findId);
};

exports.newAccounts = function (req, res) {
  const newAccount = {
    id: uuid4(),
    ...req.body,
  };
  accounts.unshift(newAccount);
  res.status(201).json(newAccount);
};

exports.updateAccounts = function (req, res) {
  const findId = accounts.find(
    (account) => account.id === req.params.accountsId
  );
  if (!findId) res.status(400).json({ message: "not find" });
  res.status(200).json(findId);

  const { username, funds } = req.body;

  if (!username || !funds) res.status(400).json({ message: "Bad Requrest" });
  findId.username = username;
  findId.funds = funds;

  res.status(200).json(foundCat);
};

exports.delateAccount = function (req, res) {
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
};

exports.findName = function (req, res) {
  const { accountName } = req.query;
  if (!accountName) {
    return res.status(404).json({ message: "Account not found" });
  }
  const findName = accounts.find(
    (account) =>
      account.username.toLocaleLowerCase() === accountName.toLocaleLowerCase()
  );
  if (!findName) res.status(404).json({ message: "not find" });
  res.status(200).json(findName);
};
