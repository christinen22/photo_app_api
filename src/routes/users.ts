/**
 * User route
 */

import express from "express"
import { getUser } from '../controllers/user_controller'

const router = express.Router()

//Get user

router.get('/', getUser)



export default router