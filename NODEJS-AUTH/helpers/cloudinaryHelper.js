import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = async(filePath)=>{
    try{
        const result = await cloudinary.uploader.upload(filePath);

        return{
            url : result.secure_url ,
            publicId :  result.public_id, //result.publicId 
        }
    }catch(error){
        console.error("error occurs at cloudinary: ", error);
        throw new Error ('error occurs at cloudinary:')
        
    }
}

export default  uploadToCloudinary
