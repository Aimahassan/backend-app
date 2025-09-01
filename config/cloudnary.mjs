import { v2 as cloudInary } from 'cloudInary';
import dotenv from "dotenv";

dotenv.config();

cloudInary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudInary;

