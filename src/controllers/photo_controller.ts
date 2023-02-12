/**
 * Photo Controller
 */

import { Request, Response } from 'express'
import Debug from 'debug'
import { validationResult } from 'express-validator'
import { createPhoto } from '../services/photo_services'
import prisma from '../prisma'


const debug = Debug('photo_app_api:photo_controller')

//Get all photos

export const index = async (req: Request, res: Response) => {
    try {
        const photos = await prisma.photo.findMany()

        res.send({
            status: "success",
            data: photos
        })
    } catch (err) {
        debug("Error thrown when finding photos", err)
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}

//Get single photo

export const show = async (req: Request, res: Response) => {
    const photoId = Number(req.params.photoId)

    try {
        const photo = await prisma.photo.findUniqueOrThrow({
            where: {
                id: photoId
            },
            include: {
                user: true,
                album: true
            }
        })

        res.send({
            status: "success",
            data: photo
        })
    } catch (err) {
        debug("Error thrown when finding a photo with id %o: %o", req.params.photoId, err)
        return res.status(404).send({
            status: "error",
            message: "Not found"
        })
    }
}


//Create a photo

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
            comment: req.body.comment
        })
       

        res.send({
            status: "success",
            data: photo
        })
    } catch (err) {
        debug("Error thrown when creating photo %o: %o", req.body.err)
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}

//Update photo

export const update = async (req: Request, res: Response) => {
}

//Delete photo

export const destroy = async (req: Request, res: Response) => {
}