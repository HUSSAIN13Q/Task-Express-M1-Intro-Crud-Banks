const express = require("express");
// const accounts = require("../../accounts");
const {
  accountLast,
  findAccounts,
  newAccounts,
  updateAccounts,
  delateAccount,
  findName,
} = require("./controllers");

const router = express.Router();

//router.get("/", accountLast);

router.get("/:accountsId", findAccounts);

router.post("/", newAccounts);

router.put("/:accountsId", updateAccounts);

router.delete("/:accountsId", delateAccount);

router.get("/", findName);
module.exports = router;
