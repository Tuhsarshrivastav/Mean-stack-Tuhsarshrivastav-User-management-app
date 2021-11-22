const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  let qrr = `SELECT * FROM users`;
  db.query(qrr, (err, res) => {
    if (err) {
      console.log(err, "error");
    }
    if (res.length > 0) {
      res.send({
        message: "All users data",
        data: res,
      });
    }
  });
});

module.exports = router;
