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
               LEFT JOIN location as b ON a.loc_id = b.id
               WHERE role !='Master'`;

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error to fetching users" });
    }
    res.status(200).json(results);
  });
});

//API TO UPDATE EXPLOYEE DETAILS
router.put('/update-users', async (req, res) => {
  const { id, name, loc_id, status, email } = req.body;

  let fields = [];
  let values = [];

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  let fname = null;
  let lname = null;
  if (name) {
    const nameParts = name.trim().splite(" ")
    fname = nameParts[0] || null;
    lname = nameParts[1] || null;
  }

  if (fname && fname !== '') {
    fields.push('fname = ?');
    values.push(fname);
  }
  if (lname && lname !== '') {
    fields.push('lname = ?');
    values.push(lname);
  }
  if (loc_id && loc_id !== '') {
    fields.push('loc_id = ?');
    values.push(loc_id);
  }
  if (email && email !== '') {
    fields.push('email = ?');
    values.push(email);
  }
  if (status && status !== '') {
    fields.push('status = ?');
    values.push(status);
  }

  if (fields.length === 0) {
    return res.status(400).json({ message: "At least one field is required to update." });
  }

  const sql = `UPDATE sgm_users SET ${fields.join(", ")} WHERE id = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error updating user" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully!" });
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

  if (!id) {
    return res.status(400).json({ message: "ID is required to update the question." });
  }

  let fields = [];
  let values = [];

  if (question && question !== '') {
    fields.push('question = ?');
    values.push(question);
  }
  if (status && status !== '') {
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