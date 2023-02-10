/**
 * Register Controller
 */

import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import prisma from '../prisma'

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

        try {
            const user = await prisma.user.create({
                data: {
                    first_name: validatedData.first_name,
                    last_name: validatedData.last_name,
                    email: validatedData.email,
                    password: hashedPassword
                },
            })

            //Status success
            res.status(201).send({ "status": "success", "data": user })

        } catch (err) {
            return res.status(500).send({ "status": "error", message: "Could not create user"})
        }

    //Store user


}