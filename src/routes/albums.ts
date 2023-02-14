/**
 * Handles all albums
 */

import express from 'express'
import { basic } from '../middlewares/auth/basic'
import {body} from 'express-validator'
import { index, show, store, addPhoto } from '../controllers/album_controller'
const router = express.Router()



/**
 * GET all albums
 */
router.get('/', basic, index)

/**
 * GET single album incl photos
 */
router.get('/:almbumId', basic, show)

/**
 * POST /resource
 */
router.post('/', basic, store)

/**
 * POST photo to album
 */


router.post('/:albumId/photos', addPhoto)

/**
 * PATCH update album
 */
//router.patch('/albums/:albumId', [], update)

/**
 * DELETE /resource/:resourceId
 */
//router.delete('/album/:albumId', destroy)

export default router


