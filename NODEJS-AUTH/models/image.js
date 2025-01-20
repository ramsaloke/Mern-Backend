import mongoose from 'mongoose';

const ImageSchema =  new mongoose.Schema({
    url : {// image url that we uploaded in frontend
        type: String,
        required: true,
    },
    publicId : {
        type: String,
        required: true
    },
    uploadedBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User' ,// we are reffering to user by which one uploading that current image
        required:true,
    }
},{timestamps: true});

export default mongoose.model('Image', ImageSchema);