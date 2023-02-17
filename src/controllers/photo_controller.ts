/**
 * Photo Controller
 */

import { Request, Response } from 'express'
import Debug from 'debug'
import { validationResult } from 'express-validator'
import { createPhoto, getPhotos, getPhoto } from '../services/photo_services'
import prisma from '../prisma'



const debug = Debug('photo_app_api:photo_controller')

/**
 * GET all photos
 * @param req 
 * @param res 
 */

export const index = async (req: Request, res: Response) => {
    const userId = Number(req.user!.id)

    try {
        const photo = await getPhotos(userId)

        res.send({
            status: "success",
            data: photo,
        })
    } catch (err) {
        debug("Error thrown when finding photoss: %o, user: %o:",  )
        res.status(500).send({status: "error", message: "Something went wrong"})
    }
}



/**
 * GET single photo
 * @param req 
 * @param res 
 */


export const show = async (req: Request, res: Response) => {
    const photoId = Number(req.params.photoId)
    
    try {
        
        const photo = await getPhoto(photoId) 

        if(Number(photo.user_id) !== Number(req.user!.id)) {
            res.status(403).send({
                status: "error",
                message: "Not your photo"
            })
        } else if(Number(photo.user_id) === Number(req.user!.id)) {
            res.status(200).send({
                status: "success",
                data: photo
            })
        }

    } catch (err) {
        debug("Error thrown finding photo %o", photoId)
        res.status(404).send({
            message: "Not found",
        })
    }
}


/**
 * POST photos
 * @param req 
 * @param res 
 * @returns 
 */

export const store = async (req: Request, res: Response) => {
    
    //Check validation
    const validationsErrors = validationResult(req)
    if(!validationsErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationsErrors.array()
        })
    } try {
        const photo = await createPhoto({
            title: req.body.title,
            url: req.body.url,
            comment: req.body.comment,
            user_id: req.user!.id
        })
       

        res.status(200).send({
            status: "success",
            data: photo
        })
    } catch (err) {
        debug("Error thrown when creating photo %o: %o", req.body.title, req.user!.id)
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}

/**
 * PATCH update photo
 * @param req 
 * @param res 
 * @returns 
 */


export const update = async (req: Request, res: Response) => {
    const photoId = Number(req.params.photoId)

    try {
        const photo = await prisma.photo.update({
            where: {
                id: photoId
            },
            data: req.body
        
        })

        return res.status(200).send(photo)
        
    } catch (err) {
        return res.status(500).send({
            status: "error",
            message: "Nope, didn't work"
        })
    }
}

