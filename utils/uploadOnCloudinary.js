import fs from "fs";
import cloudinary from "../config/cloudinary.js";

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        // Delete local file after upload
        fs.unlinkSync(localFilePath);

        return response; // returns full Cloudinary response (url, public_id, etc.)
    } catch (error) {
        console.error("Cloudinary upload failed:", error);
        fs.unlinkSync(localFilePath); // cleanup
        return null;
    }
};

export default uploadOnCloudinary;
