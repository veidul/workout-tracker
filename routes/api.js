const router = require("express").Router;
const Transaction = require("../models/workout.js");

router.get("/api/workouts"),
  ({ body }, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

router.post("/api/workouts"),
  ({ body }, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

router.put("/api/workouts"),
  ({ body }, res) => {
    Workout.update({});
  };

router.put("/api/workouts"), (module.exports = router);
