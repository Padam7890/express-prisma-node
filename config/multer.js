
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './uploads/');
    },
    filename:function (req,file,cb) {
        //filename1234.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);

    }
})

export const upload = multer({storage:storage})
