/**
 * Album services
 */

import prisma from '../prisma'
import { CreateAlbumData } from '../types'



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
            userId: data.userId,
        }
    })
}
