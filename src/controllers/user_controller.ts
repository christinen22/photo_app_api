/**
 * User Controller
 */

import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import prisma from '../prisma'
import {  getUserByEmail, createUser } from '../services/user_services'

/**
 * Register a new user
 */
export const register = async (req: Request, res: Response) => {
    const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		})
	}

    //Get only the validated data
    const validatedData = matchedData(req)

    //Calculate hash + salt
    const hashedPassword = 
        await bcrypt.hash(validatedData.password, Number(process.env.SALT_ROUNDS) || 10)

        validatedData.password = hashedPassword

        //Store user in db
        try {
            const user = await createUser({
                first_name: validatedData.first_name,
                last_name: validatedData.last_name,
                email: validatedData.email,
                password: hashedPassword
            })

            //Status success
            res.status(201).send({ "status": "success", "data": user })

        } catch (err) {
            return res.status(500).send({ "status": "error", message: "Could not create user"})
        }


}

/**
 * Get authenticated user
 */

export const getUser = async (req: Request, res: Response) => {
    res.send({
        status: "success",
        data: {
            id: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
    })
}

/**
 * Link a album to a user
 */
export const addAlbum = async (req: Request, res: Response) => {
	try {
		const result = await prisma.user.update({
			where: {
				id: Number(req.params.userId),
			},
			data: {
				album: {
					connect: {
						id: req.body.albumId,
					}
				}
			},
			include: {
				photos: true,
			}
		})
		res.status(201).send(result)
	} catch (err) {
		
		res.status(500).send({ message: "Something went wrong" })
	}
}