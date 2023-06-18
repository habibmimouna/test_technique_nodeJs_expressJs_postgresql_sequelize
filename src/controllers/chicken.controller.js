const db = require("../models");
const Chicken = db.chickens;

exports.create = (req, res) => {
  try {
    const chicken = {
      name: req.body.name,
      birthday: req.body.birthday,
      weight: req.body.weight,
      steps: req.body.steps,
      isRunning: req.body.isRunning,
      farmyardId: req.body.farmyardId,
    };

    Chicken.create(chicken)
      .then((result) => {
        res.status(201).send("Chicken added with success! ");
       
      })
      .catch((err) => console.log("err"));
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.getonebyId = (req, res) => {
  let chickenId = req.params.id;
  Chicken.findByPk(chickenId)
    .then((chicken) => {
      const result = chicken !== null ? chicken : "not found";
      res.status(200).json({
        message: " Success!",
        result,
      });
    })
    .catch((error) => {
      console.log(error);

      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};

exports.updateById = async (req, res) => {
  try {
    const chickenId = req.params.id;
    const chicken = await Chicken.findByPk(chickenId);

    if (!chicken) {
      res.status(404).json({
        message: "Chicken not found",
        error: "404",
      });
    } else {
      let updatedObject = {
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning: req.body.isRunning,
      };
      let result = await Chicken.update(updatedObject, {
        returning: true,
        where: { id: chickenId },
      });
      res.status(200).json({
        message: " Success!",
        result,
      });
      if (!result) {
        res.status(500).json({
          message: "Error ",
          error: "Can not update",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ",
      error: error.message,
    });
  }
};

exports.runningChicken = async (req, res) => {
  try {
    const chickenId = req.params.id;
    const chicken = await Chicken.findByPk(chickenId);

    if (!chicken) {
      res.status(404).json({
        message: "Chicken not found",
        error: "404",
      });
    } else {
      const incrementsteps = await chicken.increment('steps');
      await Chicken.update(incrementsteps, {
        where: {
          id: chickenId,
        },
      })
      .then((result) => {
        console.log(result);
        res.json(result);
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ",
      error: error.message,
    });
  }
};

exports.modifyById = async (req, res) => {
  try {
    const chickenId = req.params.id;
    const chicken = await Chicken.findByPk(chickenId);

    if (!chicken) {
      res.status(404).json({
        message: "Chicken not found",
        error: "404",
      });
    } else {
      await Chicken.update(req.body, {
        where: {
          id: chickenId,
        },
      })
      .then((result) => {
        console.log(result);
        res.json(result);
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ",
      error: error.message,
    });
  }
};

exports.deleteById = async (req, res) => {
  try {
    let chickenId = req.params.id;
    let chicken = await Chicken.findByPk(chickenId);

    if (!chicken) {
      res.status(404).json({
        message: "Chicken does not exist ",
        error: "404",
      });
    } else {
      await chicken.destroy();
      res.status(200).json({
        message: "Chicken deleted successfully  ",
        chicken: chicken,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error ",
      error: error.message,
    });
  }
};
