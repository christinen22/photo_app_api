/**
 * Type definitions
 */

export type CreateUserData = {
    first_name: string,
    last_name: string,
    email: string
}

export type CreateAlbumData = {
	title: string,
}

export type createPhotoData = {
	title: string,
	url: string,
	albumId: number,
	userId: number
}