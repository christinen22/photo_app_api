/**
 * User route
 */

import express from "express"
//import { addPhoto } from "../controllers/album_controller"
import { getUser } from '../controllers/user_controller'

const router = express.Router()

//Get user

router.get('/', getUser)



export default router