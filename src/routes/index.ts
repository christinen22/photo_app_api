import express from "express"
import { body } from 'express-validator'
import resource from './_router'
import { register } from '../controllers/register_controller'
// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})
 
router.post('/register', [
	//validation for rules

	body('first_name').isString().bail().isLength({ min: 2}),
	body('last_name').isString().bail().isLength({ min: 2}),
	body('email').isEmail(),
	body('password').isString()


], register)

export default router
