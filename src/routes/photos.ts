/**
 * Handles all photos
 */


import express from 'express'
import { body } from 'express-validator'
import { index, show, store } from '../controllers/photo_controller'
const router = express.Router()

/**
 * GET all photos
 */
router.get('/photos', index)

/**
 * GET a single photo
 *
 */
router.get('/photos/:photoId', show)

/**
 * POST /resource
 */
router.post('/photos', [
    body('title').isString().bail().isLength({ min: 3 }),
], store)

/**
 * PATCH update photo
 */
//router.patch('/photos/:photoId', [], update)

/**
 * DELETE /resource/:resourceId
 */
//router.delete('/photos:photoId', destroy)

export default router
