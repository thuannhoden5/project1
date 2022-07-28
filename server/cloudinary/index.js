const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name:"df8rrtx3z",
    api_key: "287125589735878",
    api_secret: "Iwy34Ywm_zT0N-QHX4VNldorO3k"
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Shopping',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
})

module.exports = {
    cloudinary, storage
}