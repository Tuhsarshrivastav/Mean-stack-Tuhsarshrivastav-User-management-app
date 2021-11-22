const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

// const Database = require("./db");
// const Router = require("./routes/userRoute");

const app = express();

app.use(cors());
app.use(express.json());

// Database();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user-management",
});
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("conecction successed");
  }
});

// app.use("/api", Router);
app.get("/users", (req, res) => {
  let qrr = `SELECT * FROM users`;
  db.query(qrr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "All users data",
        data: result,
      });
    }
  });
});
app.get("/user/:id", (req, res) => {
  let qrid = req.params.id;
  let qr = `SELECT * FROM users where id = ${qrid}`;
  db.query(qr, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (results.length > 0) {
      res.send({
        message: "get data by id",
        data: results,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});
app.post("/user", (req, res) => {
  let fullName = req.body.fullname;
  let eMail = req.body.email;
  let Mobile = req.body.mobile;

  let qr = `insert into users(fullname,email,mobile) value('${fullName}','${eMail}','${Mobile}') `;
  db.query(qr, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "craeted",
      data: results,
    });
  });
});

app.put("/user/:id", (req, res) => {
  let uid = req.params.id;
  let fullName = req.body.fullname;
  let eMail = req.body.email;
  let Mobile = req.body.mobile;

  let qr = `update users set fullname = '${fullName}', email = '${eMail}' , mobile =' ${Mobile}' where id = ${uid}`;
  db.query(qr, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "updated",
      data: results,
    });
  });
});

app.delete("/user/:id", (req, res) => {
  let uid = req.params.id;

  let qr = `delete from users where id = '${uid}'`;
  db.query(qr, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "deleted",
    });
  });
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
