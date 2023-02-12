/**
 * Handles all photos
 */


import express from 'express'
import { body } from 'express-validator'
import { index, store } from '../controllers/photo_controller'
const router = express.Router()

/**
 * GET /resource
 */
router.get('/photos', index)

/**
 * GET /resource/:resourceId
 */
//router.get('/photos/:photoId', show)

/**
 * POST /resource
 */
router.post('/photos', [
    body('title').isString().bail().isLength({ min: 3 }),
    body('url').isString().bail().notEmpty()
], store)

/**
 * PATCH /resource/:resourceId
 */
//router.patch('/photos/:photoId', [], update)

/**
 * DELETE /resource/:resourceId
 */
//router.delete('/photos:photoId', destroy)

export default router
