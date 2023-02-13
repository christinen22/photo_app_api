/**
 * Handles all albums
 */

import express from 'express'
import {body} from 'express-validator'
import { index, show, store, addPhoto } from '../controllers/album_controller'
const router = express.Router()



/**
 * GET all albums
 */
router.get('/albums', index)

/**
 * GET single album incl photos
 */
router.get('/albums/:almbumId', show)

/**
 * POST /resource
 */
router.post('/albums', [
    body('title').isString().bail().isLength({ min: 3 }),

], store)

/**
 * POST photo to album
 */


router.post('/albums/:albumId/photos', addPhoto)

/**
 * PATCH update album
 */
//router.patch('/albums/:albumId', [], update)

/**
 * DELETE /resource/:resourceId
 */
//router.delete('/album/:albumId', destroy)

export default router


