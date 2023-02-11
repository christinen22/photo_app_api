/**
 * HTTP Basic Authentication
 */
import bcrypt from 'bcrypt'
import Debug from 'debug'
import { Request, Response, NextFunction } from 'express'
import { getUserByEmail } from '../../services/user_services'

const debug = Debug('photo_app_api:basic')

export const basic = async (req: Request, res: Response, next: NextFunction) => {
    
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

    //Get user from db
    const user = await getUserByEmail(email)
    if (!user) {

        return res.status(401).send({
            status: "fail",
            data: "Authorization required"
        })
    }

    const result = await bcrypt.compare(password, user.password)
    if (!result) {
        return res.status(400).send({
            status: "fail",
            data: "Authorization required"
        })
    }

    //Attach user to request
    req.user = user


    next()
}