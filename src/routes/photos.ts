/**
 * Handles all photos
 */


import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/photo_controller'
const router = express.Router()

/**
 * GET /resource
 */
router.get('/', index)

/**
 * GET /resource/:resourceId
 */
router.get('/:photoId', show)

/**
 * POST /resource
 */
router.post('/', [], store)

/**
 * PATCH /resource/:resourceId
 */
router.patch('/:photoId', [], update)

/**
 * DELETE /resource/:resourceId
 */
//router.delete('/photos:photoId', destroy)

export default router
