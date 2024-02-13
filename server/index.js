import express from "express";
import mysql from "mysql";
import cors from "cors";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database");
});

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 8801;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
