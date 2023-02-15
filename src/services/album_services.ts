/**
 * Album services
 */

import prisma from '../prisma'
import { basic } from '../middlewares/auth/basic'
import { CreateAlbumData } from '../types'
import { debug } from 'console'


//Get all albums
export const getAlbums = async (userId: number) => {
    return await prisma.album.findMany(
        {
            where: {
                user_id: userId
            }
        }
    )
}


/**
 * Get a single album
 *
 * @param albumId 
 */
export const getAlbum = async (albumId: number, userId: number) => {
    
    return await prisma.album.findUniqueOrThrow({

        where: {
            id: albumId,
            user_id: userId
       
        }, 
        select: {
            id: true,
            title: true,
            photos: true,
            
        }, 
    })
}




export const createAlbum = async (data: CreateAlbumData) => {
    return await prisma.album.create({
        data: {
            title: data.title,
            user: {
                connect: {
                    id: data.user_id
                }
            }
        }
    })
}
