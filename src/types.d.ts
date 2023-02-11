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
	userId: number
}

export type createPhotoData = {
	title: string,
	url: string,
	albumId: number,
	userId: number
}