/**
 * Validation rules for user resource
 */

import { body } from 'express-validator'
import { getUserByEmail } from '../services/user_services'

export const createUserRules = [
    body('first_name').isString().bail().isLength({ min: 2}),
	body('last_name').isString().bail().isLength({ min: 2}),
	body('email').isEmail(),
	body('password').isString()

]