/**
 * Photo services
 */



import prisma from "../prisma";
import { CreatePhotoData } from "../types";




/**
 * GET all photos
 * @param userId 
 * @returns 
 */
export const getPhotos = async (userId: number) => {
    return await prisma.photo.findMany(
        {
            where: {
                user_id: userId
            }
        }
    )
}

/**
 * Get a single photo
 *
 * @param photoId
 */
export const getPhoto = async (photoId: number) => {
    
    return await prisma.photo.findUniqueOrThrow({


        where: {
            id: photoId
       
        }, 
        select: {
            id: true,
            title: true,
            url: true,
            comment: true,
            user_id: true,
            
        }
    })
}






/**
 * POST photos
 * @param data 
 * @returns 
 */
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
