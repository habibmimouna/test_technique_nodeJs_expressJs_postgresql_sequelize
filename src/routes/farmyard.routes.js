const express = require("express");
const router = express.Router();

const farmyard = require("../controllers/farmyard.controller");


/**
 * @swagger
 * tags:
 *   name: Farmyards
 *   description: API to manage farmyards
 */

/**
 * @swagger
 *     /farmyard/saveone:
 *     post:
 *       summary:  Add a new farmyard
 *       tags: [Farmyards]
 *       requestBody:
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                 $ref: '#/components/schemas/farmyard'
 *       responses:
 *         "201":
 *           description: Farmyard added with success!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/farmyard'
 *         "500":
 *           description: An error occured while adding the farmyard
 *           $ref: '#/components/responses/500'
 *
 */

/** 
 * @swagger
 *   /farmyard/getone/{id}:
 *     get:
 *       summary: Get one farmyard by id
 *       tags: [Farmyards]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The farmyard's id
 *       responses:
 *         "200":
 *           description: farmyard found !
 *           contents:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                    $ref: '#/components/schemas/farmyard'
 *         "404":
 *           $ref: '#/components/responses/404'
 *         "500":
 *           $ref: '#/components/responses/500'
 *  
 */
/** 
 * @swagger
 *   /farmyard/getfarmyardchickens/{id}:
 *     get:
 *       summary: Get farmyard chickens by id
 *       tags: [Farmyards]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The farmyard's id
 *       responses:
 *         "200":
 *           description: farmyard found !
 *           contents:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                    $ref: '#/components/schemas/farmyard'
 *         "404":
 *           $ref: '#/components/responses/404'
 *         "500":
 *           $ref: '#/components/responses/500'
 *  
 */


/**
 * @swagger
 *     /farmyard/delete/{id}:
 *     delete:
 *       summary:  Removing a farmyard
 *       tags: [Farmyards]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The farmyard's id
 *       responses:
 *         "200":
 *           description: Framyard removed with success!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/farmyard'
 *         "404":
 *           description: could not find farmyard!
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/responses/404'
 *         "500":
 *           description: An error occured while updating the farmyard
 *           $ref: '#/components/responses/500'
 *
 */


router.post("/saveone", farmyard.create);
router.get("/getone/:id", farmyard.getonebyId);
router.get("/getfarmyardchickens/:id", farmyard.getFarmyardChickens);
router.delete("/delete/:id", farmyard.deleteById);

module.exports = router;
