import express from "express";
import db from '../db.js'
const router = express.Router();

//API TO GET ALL Locations
router.get('/locations', async (req, res) => {
  const sql = `SELECT * FROM location WHERE status='A'`;
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error fetching locations" });
    }
    res.json(results);
  });
});

//GET ALL USERS FOR MASTER
router.get("/get-Users", (req, res) => {

  const sql = `SELECT a.id,CONCAT(a.fname ," ",a.lname) AS name,a.email,a.mobile,a.status,b.name as loc_name
               FROM sgm_users AS a 
               LEFT JOIN location as b ON a.loc_id = b.id`;

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error to fetching users" });
    }
    res.status(200).json(results);
  });
});

//GET ALL QUESTIONS FOR MASTER
router.post("/all-questions", (req, res) => {
  const { flag } = req.body;
  const u_role = `%${flag}%`;

  const sql = `SELECT id, seq_id, question, status, week, u_role FROM questions WHERE u_role LIKE ?`;
  db.query(sql, [u_role], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error fetching questions" });
    }
    res.status(200).json(results);
  });
});

//API TO UPDATE QUESTIONS
router.put("/update-questions", (req, res) => {
  const { question, status, id } = req.body;
  console.log(question, status, id);

  if (!id) {
    return res.status(400).json({ message: "ID is required to update the question." });
  }

  let fields = [];
  let values = [];

  if (question && question.trim() !== '') {
    fields.push('question = ?');
    values.push(question);
  }
  if (status && status.trim() !== '') {
    fields.push('status = ?');
    values.push(status);
  }

  if (fields.length === 0) {
    return res.status(400).json({ message: "No fields to update." });
  }

  const sql1 = `UPDATE questions SET ${fields.join(", ")} WHERE id = ?`;
  values.push(id);

  db.query(sql1, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error updating questions", error: err });
    }
    res.json({ message: "Your question was updated successfully!", results });
  });
});

export default router;