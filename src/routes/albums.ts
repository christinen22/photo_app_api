/**
 * Handles all albums
 */

import express from 'express'
import { body } from 'express-validator'
import { basic } from '../middlewares/auth/basic'
import { index, show, store, update, addPhoto } from '../controllers/album_controller'
const router = express.Router()



/**
 * GET all albums
 */
router.get('/', basic, index)

/**
 * GET single album incl photos
 */
router.get('/:albumId', basic, show)

/**
 * POST /resource
 */
router.post('/', [
    body('title').isString().bail().isLength({ min: 3 })
], basic, store)

/**
 * POST photo to album
 */


router.post('/:albumId/photos', addPhoto)

/**
 * PATCH update album
 */
router.patch('/:albumId', update)



export default router


