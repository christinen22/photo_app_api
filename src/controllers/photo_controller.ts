/**
 * Photo Controller
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { createPhoto } from '../services/photo_services'
import prisma from '../prisma'


//Get all photos

export const index = async (req: Request, res: Response) => {


        
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
            userId: req.body.userId,
            albumId: req.body.albumId
            
        })

        res.send({
            status: "success",
            data: photo
        })
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Something went wrong"
        })
    }
}