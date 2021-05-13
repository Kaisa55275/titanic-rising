import { ResourceApiResponse } from 'cloudinary'
import { cloudinaryConfig, cloudinary } from './cli'

export const getTopImages = async () => {
  cloudinaryConfig()

  const res: ResourceApiResponse = await cloudinary.search
    .expression('folder:titanicrising.jp/top/*')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()

  return res
}
