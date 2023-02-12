/**
 * Album controller
 */

import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { createAlbum, getAlbum, getAlbums } from '../services/album_services'
import prisma from '../prisma'

//Create a new debug instance
const debug = Debug('photo_app_api:album_controller')

//Get all albums

export const index = async (req: Request, res: Response) => {
    try {
        const album = await getAlbums()

        res.send({
            status: "success",
            data: album,
        })
    } catch (err) {
        debug("Error thrown when finding albums", err)
        res.status(500).send({status: "error", message: "Something went wrong"})
    }
}

//Get a single album
export const show = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

    try {
        const album = await getAlbum(albumId)

        res.send({
            status: "success",
            data: album,
        })
    } catch (err) {
        debug(err)
        res.status(404).send({
            message: "Not found",
        })
    }
}


//Create an album

export const store = async (req: Request, res: Response) => {
    
    //Check validation
    const validationsErrors = validationResult(req)
    if(!validationsErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationsErrors.array()
        })
    } try {
        const album = await createAlbum({
            title: req.body.title
            
        })

        res.send({
            status: "success",
            data: album
        })
    } catch (err) {
        debug("Error thrown when creating an album %o: %o", req.body.err)
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}

