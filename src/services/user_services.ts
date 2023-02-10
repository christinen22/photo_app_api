/**
 * User services
 */

import prisma from '../prisma'
import { CreateUserData } from '../types'

//Get user by email

export const getUserByEmail = async (email:string) => {
    return await prisma.user.findUnique({
        where: {
            email: email,
        }
    })
}

//Create user

export const createUser = async (data: CreateUserData) => {
    return await prisma.user.create({
        data: data,
    })
}