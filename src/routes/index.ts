import express from "express"
import { body } from 'express-validator'
import resource from './_router'
import { register } from '../controllers/register_controller'
import { createUserRules } from "../validations/user_rules"
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
 
router.post('/register', createUserRules, register)

export default router
