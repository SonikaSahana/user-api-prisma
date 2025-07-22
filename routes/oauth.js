const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const SECRET_KEY = process.env.SECRET_KEY;

router.post("/token", (req, res) => {
  const { client_id, client_secret } = req.body;

  if (client_id !== CLIENT_ID || client_secret !== CLIENT_SECRET) {
    return res.status(401).json({ error: "Invalid client_id or client_secret" });
  }

  const payload = {
    sub: client_id,
    scope: "read write"
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  res.json({ access_token: token });
});

module.exports = router;
