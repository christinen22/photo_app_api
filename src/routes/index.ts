import express from "express"
import albums from './albums'
import photos from './photos'
import user from './users'
import { body } from 'express-validator'
import resource from './_router'
import { register } from '../controllers/user_controller'
import { basic } from "../middlewares/auth/basic"
import { createUserRules } from "../validations/user_rules"
import { createAlbum } from "../services/album_services"
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

//Get authorized user
router.use('/user', basic, user)

//Create user
router.post('/register', createUserRules, register)



router.use('/albums', basic, albums)

router.use('/photos', basic, photos)

router.use('/user', basic, user)









export default router
