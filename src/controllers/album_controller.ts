/**
 * Album controller
 */

import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'
import { createAlbum, getAlbum, getAlbums } from '../services/album_services'
import { getPhoto } from '../services/photo_services'



//Create a new debug instance
const debug = Debug('photo_app_api:album_controller')

/**
 * GET all albums
 * @param req 
 * @param res 
 * 
 */

export const index = async (req: Request, res: Response) => {
    const userId = Number(req.user!.id)


    try {
        const album = await getAlbums(userId)
        

        res.status(200).send({
            status: "success",
            data: album,
        })

    } catch (err) {
        debug("Error thrown when finding albums: %o, user: %o:" )
        res.status(500).send({
            status: "error", 
            message: "Something went wrong"
        })
    }
}

/**
 * GET single album
 * @param req 
 * @param res 
 */


export const show = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)
    
    try {
        
        const album = await getAlbum(albumId) 

        if(Number(album.user_id) !== Number(req.user!.id)) {
            res.status(403).send({
                status: "error",
                message: "Not your album"
            })
        } else if(Number(album.user_id) === Number(req.user!.id)) {
            res.status(200).send({
                status: "success",
                data: album
            })
        }

    } catch (err) {
        debug("Error thrown finding albumId %o", albumId)
        res.status(404).send({
            status: "error",
            message: "Not found",
        })
    }
}



/**
 * POST album
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
            data: validationsErrors.array(),
        })
    }



    try {
        const album = await createAlbum({
        title: req.body.title,
        user_id: req.user!.id
        })

        res.status(200).send({

            status: "success",
            data: album
            
        })

    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}

/**
 * Link a photo to an users album
 */
export const addPhoto = async (req: Request, res: Response) => {
    const photo_id = Number(req.body.photo_id)
    const albumId = Number(req.params.albumId)

    const photo = await getPhoto(photo_id)
    const album = await getAlbum(albumId)
    


    if(Number(req.user!.id) !== album.user_id) {
        debug("Photos userid: %o, album userId: %o", photo.user_id, album.user_id)
        return res.status(400).send({
            status: "error",
            message: "Not your album"
        })
    }

    if(Number(req.user!.id) !== photo.user_id) {
        return res.status(400).send({
            status: "error",
            message: "Not your photo"
        })
    }


	try {

		const result = await prisma.album.update({
			where: {
				id: Number(req.params.albumId)
			},
			data: {
				photos: {
					connect: {
						id: req.body.photo_id,
					}
				}
			},
			include: {
				photos: true
			}
		})
		return res.status(200).send({
            status: "success",
            data: result
        })
	} catch (err) {
		return res.status(500).send({ 
            status: "error",
            message: "Something went wrong" 
        })
	}
}


/**
 * PATCH update album
 * @param req 
 * @param res 
 * @returns 
 */


export const update = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

    try {
        const album = await prisma.album.update({
            where: {
                id: albumId
            },
            data: req.body
        
        })

        return res.status(200).send(album)
        
    } catch (err) {
        return res.status(500).send({
            status: "error",
            message: "Nope, didn't work"
        })
    }
}
