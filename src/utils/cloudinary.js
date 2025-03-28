import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    console.log(localFilePath);
    if (!localFilePath) return null;
    const uploadResult = await cloudinary.uploader.upload(`${localFilePath}`, {
      resource_type: "auto",
    });

    // // file has been uploaded successfully
    // console.log("File is uploaded on cloudinary", uploadResult.url);
    fs.unlinkSync(localFilePath);
    return uploadResult;
  } catch (error) {
    // ab toh file server per hein per upload nahi hua so we have to remove that file from server to avoid malicious file
    fs.unlinkSync(localFilePath); // remove the locally saveed temp file as the upload operation got failed.
    return null;
  }
};

export { uploadCloudinary };
