/**
 * User Controller
 */

import Debug from 'debug'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import prisma from '../prisma'
import {  getUserByEmail, createUser } from '../services/user_services'

const debug = Debug('photo_app_api:user_controller')

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

   const validatedData = matchedData(req) //Get only the validated data
    

    //Calculate hash + salt
    const hashedPassword = await bcrypt.hash(validatedData.password, Number(process.env.SALT_ROUNDS) || 10)

        validatedData.password = hashedPassword

        //Store user in db
        try {
            const user = await createUser({
                first_name: validatedData.first_name,
                last_name: validatedData.last_name,
                email: validatedData.email,
                password: hashedPassword
            })

            res.status(200).send({ 
                "status": "success", 
                "data": user 
            })

        } catch (err) {
            return res.status(500).send({ 
                "status": "error", 
                message: "Could not create user"
            })
        }
}

/**
 * Get authenticated user
 */

export const getUser = async (req: Request, res: Response) => {

    const user = await getUserByEmail (req.user!.email)

    res.status(200).send({
        status: "success",
        data: {
            id: user?.id,
            first_name: user?.first_name,
            last_name: user?.last_name,
            email: user?.email
        }
    })
}



