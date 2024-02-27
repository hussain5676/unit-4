var express = require("express");
var router = express.Router();
const studentElectivesController = require("../controllers/studentController");

router.post("/addElectives", async (req, res) => {
  studentElectivesController.create(req.body, (err, studentResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: studentResponse,
    });
  });
});

router.post("/updateElectives", (req, res) => {
  let data = req.body;
  studentElectivesController.findOneAndUpdate(
    { name: req.body.name.toLowerCase() },
    data,
    (err, updatedStudent) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedStudent,
      });
    }
  );
});

router.get("/findStudent/:name", (req, res) => {
  studentElectivesController.find(
    { name: req.params.name.toLowerCase() },
    (err, studentDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: studentDetails,
      });
    }
  );
});

router.delete("/deleteStudent", (req, res) => {
  studentElectivesController.findOneAndRemove(
    { name: req.body.name.toLowerCase() },
    (err, deletedStudent) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedStudent,
      });
    }
  );
});

router.get("/findAllStudents", (req, res) => {
  studentElectivesController.find({}, (err, allStudentDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allStudentDetails,
    });
  });
});

module.exports = router;
