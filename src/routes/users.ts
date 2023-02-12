/**
 * User route
 */

import express from "express"
//import { addPhoto } from "../controllers/album_controller"
import { getUser, addAlbum, addPhoto } from '../controllers/user_controller'

const router = express.Router()

//Get user

router.get('/', getUser)

//Link album to user
router.post('/:userId/albums', addAlbum)


//Link photo to user
router.post('/:userId/photos', addPhoto)

export default router