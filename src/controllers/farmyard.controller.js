const db = require("../models");
const Farmyard = db.farmyards;
const Chicken = db.chickens;


exports.create = (req, res) => {
    try {
      const farmyard = {
        name: req.body.name,
      };
  
      Farmyard.create(farmyard)
        .then((result) => {
          res.status(201).send("farmyard created with success! ");
        })
        .catch((err) => console.log("err"));
    } catch (err) {
      console.log("error here !");
      res.status(500).send({
        message:
          err.message || "Some error occurred .",
      });
    }
  };

  exports.getonebyId = (req, res) => {
    let farmyardId = req.params.id;
    Farmyard.findByPk(farmyardId)
      .then((farmyard) => {
        const result = farmyard !== null ? farmyard : "not found";
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

  exports.deleteById = async (req, res) => {
    try {
      let farmyardId = req.params.id;
      let farmyard = await Farmyard.findByPk(farmyardId);
  
      if (!farmyard) {
        res.status(404).json({
          message: "Farmyard does not exist ",
          error: "404",
        });
      } else {
        await farmyard.destroy();
        res.status(200).json({
          message: "Farmyard deleted successfully  ",
          farmyard: farmyard,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error ",
        error: error.message,
      });
    }
  };

  exports.getFarmyardChickens =  async (req, res) => {

    const id = req.params.id

    const farmyard = await Farmyard.findOne({
        include: [{
            model: Chicken,
            as: 'chicken'
        }],
        where: { id: id }
    })

    res.status(200).send(farmyard)

}