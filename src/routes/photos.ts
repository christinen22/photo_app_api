/**
 * Handles all photos
 */


import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update } from '../controllers/photo_controller'
const router = express.Router()

/**
 * GET all photos
 */
router.get('/', index)

/**
 * GET a single photo
 *
 */
router.get('/:photoId', show)

/**
 * POST /resource
 */
router.post('/', [
    body('title').isString().bail().trim().isLength({ min: 3 }),
    body('url').isURL(),
    body('comment').optional().isString().bail().trim().isLength({ min: 3 })
], store)

/**
 * PATCH update photo
 */
router.patch('/:photoId', [
    body('title').isString().bail().trim().isLength({ min: 3 }),
    body('url').isURL(),
    body('comment').isString().trim().bail().isLength({ min: 3 })
], update)



export default router
