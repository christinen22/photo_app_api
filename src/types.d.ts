/**
 * Type definitions
 */

export type CreateUserData = {
    first_name: string,
    last_name: string,
    email: string,
	password: string
}

export type CreateAlbumData = {
	title: string,
	userId: number,
	photos: any
}

export type CreatePhotoData = {
	title: string,
	url: string
}