import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

// URL = uniform resource locator
// URI =  uniform resource indentifier
// URN = uniform resource name

/*
What are HTTP headers: metdata ---> key-value sent along with request and response



request headers --> from client
response headers --> from server
representation headers --> encoding/compression
payload headers --> data




HTTP methods:
GET, HEAD , OPTIONS, TRACE, DELETE, PUT, POST, PATCh
*/
