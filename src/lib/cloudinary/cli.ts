import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_CLI } from '../constants'

export { cloudinary }
export const cloudinaryConfig = () => cloudinary.config(CLOUDINARY_CLI)
