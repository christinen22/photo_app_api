/**
 * User route
 */

import express from "express"
import { getUser, addAlbum } from '../controllers/user_controller'

const router = express.Router()

//Get user

router.get('/', getUser)

//Link album to user
router.post('/:userId/albums', addAlbum)

export default router