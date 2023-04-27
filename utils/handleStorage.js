const multer = require("multer");



const storage = multer.diskStorage({
    destination: function (req, file, cback) {
        const patchStorage= `${__dirname}/../storage`;
        cback(null, patchStorage);
    },
    filename: function (req, file, cback) {
        const ext = file.originalname.split(".").pop();  //ultimo valor del array
        const filename = `file-${Date.now()}.${ext}`;
        cback(null, filename);
    },
});

const uploadMiddleware = multer({
    storage:storage
});


module.exports = uploadMiddleware;