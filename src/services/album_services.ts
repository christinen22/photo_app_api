/**
 * Album services
 */

import prisma from '../prisma'
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
        data: data
    })
}
