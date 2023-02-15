/**
 * Photo services
 */

import { basic } from "../middlewares/auth/basic";

import prisma from "../prisma";
import { CreatePhotoData } from "../types";

export const createPhoto = async (data: CreatePhotoData) => {
    return await prisma.photo.create({
        data: {
            title: data.title,
            url: data.url,
            comment: data.comment,
            user: {
                connect: {
                    id: data.user_id
                }
            }
        }
    })
}
