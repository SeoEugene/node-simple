# client
npm create-react-app .
npm react-bootstrap bootstrap
npm install react-router-dom
npm install axios
npm install http-proxy-middleware
npm i @emotion/css
npm i @emotion/react
npm i @emotion/styled
npm install firebase

npm run build 

# server
npm init -y;
npm install express --save;
npm install nodemon --save;
  ```"scripts": {
    "start": "nodemon index.js"
  },```
npm install path --save;
npm install mongoose --save;
npm install multer  (이미지)
npm install --save aws-sdk@2.348.0



npm install multer-s3 --save
npm uninstall multer-s3
npm i multer-s3@2.10.0






## server 기본
```const express = require("express");
const app = express();
const port = 5050;

app.get('/', function (req, res) {
    res.send("Hi");
});


app.listen(port, () => {
    console.log("running ->" + port);
});```



## 트러블 슈팅

CORS

