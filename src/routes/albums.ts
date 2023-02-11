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
router.get('/albums', index)

/**
 * GET /resource/:resourceId
 */
router.get('/albums/:almbumId', show)

/**
 * POST /resource
 */
router.post('/albums', store)

/**
 * PATCH /resource/:resourceId
 */
//router.patch('/albums/:albumId', [], update)

/**
 * DELETE /resource/:resourceId
 */
//router.delete('/album/:albumId', destroy)

export default router
