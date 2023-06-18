const express = require("express");
const router = express.Router();

const chicken = require("../controllers/chicken.controller");


/**
 * @swagger
 * tags:
 *   name: Chickens
 *   description: API to manage chickens
 */

/** 
 * @swagger
 *   /chicken/getone/{id}:
 *     get:
 *       summary: Get one chicken by id
 *       tags: [Chickens]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The chicken id
 *       responses:
 *         "200":
 *           description: chicken found !
 *           contents:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                    $ref: '#/components/schemas/chicken'
 *         "404":
 *           $ref: '#/components/responses/404'
 *         "500":
 *           $ref: '#/components/responses/500'
 *  
 */
/**
 * @swagger
 *     /chicken/saveone:
 *     post:
 *       summary:  Add a new chicken
 *       tags: [Chickens]
 *       requestBody:
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                 $ref: '#/components/schemas/chicken'
 *       responses:
 *         "201":
 *           description: Chicken added with success!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/chicken'
 *         "500":
 *           description: An error occured while adding the chicken
 *           $ref: '#/components/responses/500'
 *
 */

/**
 * @swagger
 *     /chicken/update/{id}:
 *     put:
 *       summary:  Updating a chicken
 *       tags: [Chickens]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The chicken id
 *       requestBody:
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                 $ref: '#/components/schemas/chicken'
 *       responses:
 *         "404":
 *           description: could not find chicken!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/responses/404'
 *         "500":
 *           description: An error occured while updating the chicken
 *           $ref: '#/components/responses/500'
 *
 */
/**
 * @swagger
 *     /chicken/run/{id}:
 *     put:
 *       summary:  Incrementing chicken steps by 1
 *       tags: [Chickens]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The chicken id
 *       responses:
 *         "404":
 *           description: could not find chicken!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/responses/404'
 *         "500":
 *           description: An error occured while updating the chicken
 *           $ref: '#/components/responses/500'
 *
 */
/**
 * @swagger
 *     /chicken/modify/{id}:
 *     patch:
 *       summary:  Modifying a chicken
 *       tags: [Chickens]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The chicken id
 *       responses:
 *         "404":
 *           description: could not find chicken!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/responses/404'
 *         "500":
 *           description: An error occured while modifying the chicken
 *           $ref: '#/components/responses/500'
 *
 */
/**
 * @swagger
 *     /chicken/delete/{id}:
 *     delete:
 *       summary:  Removing a chicken
 *       tags: [Chickens]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The chicken id
 *       responses:
 *         "200":
 *           description: Chicken removed with success!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/chicken'
 *         "404":
 *           description: could not find chicken!
 *           $ref: '#/components/responses/404'
 *         "500":
 *           description: An error occured while updating the chicken
 *           $ref: '#/components/responses/500'
 *
 */




router.post("/saveone", chicken.create);
router.get("/getone/:id", chicken.getonebyId);
router.put("/update/:id", chicken.updateById);
router.put("/run/:id", chicken.runningChicken);
router.patch("/modify/:id", chicken.modifyById);
router.delete("/delete/:id", chicken.deleteById);

module.exports = router;
