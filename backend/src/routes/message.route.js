const express = require("express");
const router = express.Router();

const {
  createMessage,
  getMessages,
  replyMessage,
} = require("../controller/message.controller");

router.post("/", createMessage);
router.get("/", getMessages);
router.put("/:id/reply", replyMessage);

module.exports = router;