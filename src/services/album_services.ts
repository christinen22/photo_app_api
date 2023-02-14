/**
 * Album services
 */

import prisma from '../prisma'
import { basic } from '../middlewares/auth/basic'
import { CreateAlbumData } from '../types'


//Get all albums
export const getAlbums = async () => {
    return await prisma.album.findMany()
}


//Get a single album
export const getAlbum = async (albumId: number) => {
    return await prisma.album.findUniqueOrThrow({
        where: {
            id: albumId,
        },
        include: {
            photos: true
        }
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
