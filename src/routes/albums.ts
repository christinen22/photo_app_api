/**
 * Handles all albums
 */

import express from 'express'
import {body} from 'express-validator'
import { index, show, store } from '../controllers/album_controller'
const router = express.Router()



/**
 * GET /resource
 */
router.get('/', index)

/**
 * GET /resource/:resourceId
 */
router.get('/:almbumId', show)

/**
 * POST /resource
 */
router.post('/', [
    body('title').isString().bail().isLength({ min: 3 }),

], store)

/**
 * POST
 */
//Link photo to album

//router.post('/:albumId/photos', addPhoto)

/**
 * PATCH /resource/:resourceId
 */
//router.patch('/albums/:albumId', [], update)

/**
 * DELETE /resource/:resourceId
 */
//router.delete('/album/:albumId', destroy)

export default router


