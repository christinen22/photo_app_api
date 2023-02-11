/**
 * HTTP Basic Authentication
 */

import Debug from 'debug'
import { Request, Response, NextFunction } from 'express'

const debug = Debug('photo_app_api:basic')

export const basic = (req: Request, res: Response, next: NextFunction) => {
    
    //Check Authorization header
    if (!req.headers.authorization) {
        return res.status(401).send({
            status: "fail",
            data: "Authorization required"
        })
    }

    const [authSchema, base64Payload] = req.headers.authorization.split(' ')

    //Check that its Basic
    if (authSchema.toLowerCase() !== "basic") {
        return res.status(401).send({
            status: "fail",
            data: "Authorization required"
        })
    }

    //Decode crdentials from base64 to ascii
    const decodedPayload = Buffer.from(base64Payload, "base64").toString("ascii")

    //Split decodedPayload
    const [email, password] = decodedPayload.split(':')




    next()
}