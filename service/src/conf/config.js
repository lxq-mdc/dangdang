// const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
//傻逼dotenv要自己写path，绷不住了
// dotenv.config({ path: path.resolve(__dirname, "../.env") });
const PRIVATE_KEY = fs.readFileSync(
    path.resolve(__dirname, "./keys/private.key")
);
const PUBLIC_KEY = fs.readFileSync(
    path.resolve(__dirname, "./keys/public.key")
);
// module.exports = {
//   APP_PORT,
//   MYSQL_HOST,
//   MYSQL_PORT,
//   MYSQL_DATABASE,
//   MYSQL_USER,
//   MYSQL_PASSWORD,
// } = process.env;
module.exports.PUBLIC_KEY = PUBLIC_KEY;
module.exports.PRIVATE_KEY = PRIVATE_KEY;
//追加对象属性