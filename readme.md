# Backend Project

This project is made from YouTube Channel, (Chai and Code)

- This is Backend project

# Added first git porject push

- git init (initialize)
- git add .
- git commit -m "comment"
- create new repository in git dashboard
- branch change 'master to main' (git branch -M main)
- set origin (given from while after creatd repository in git dashboard - git remote add origin https://github.com/nitin2004kr/Chai-backend.git)
- push the code to git (git push -u origin main)

# .gitKeep (file)

- This file is created for when any folder which we want to push to git without any content, becouse git don't allow to push that folder which do not have any content in it, so it allows us to push the folder like (pulic -> images) with out any contnet.

# git status (command)

- By this command we can check what is next to push on git.

# .gitIgnore (file)

- This is file which, do not push that file or ignore that file which we don't want to push on git.
- We can get banch of files snippet based on project which we not want to push on git (gitignore generator), this give us pre written file names based on project setup and we can easily download or copy and past it in our .gitignore file.

# -------- DOTENV ---------

- This is file which, store the environment variables in it.
- We can get banch of files snippet based on project which we not want to push on git (gitignore generator), this give us pre written file names based on project setup and we can easily download or copy and past it in our .gitignore file.

# -------- MONGOSSE CONNECTION ---------

- \***\*\*\*\*\*\*\*** This is first approch for connection of mongoose to project in index file \***\*\*\*\*\*\*\***
- Created the .env file and store 'Connection String' in it.
- In index.js file, we have to import mongoose and DB_NAME from constant.js file.
- In index.js file, we have to connect the mongoose to the database.
- In index.js file, we have to listen the server.
- In index.js file, we have to check the connection is successful or not.
- In index.js file, we have to check the server is running or not.
- In index.js file, we have to check the database is connected or not.
- In index.js file, we have to check the server is running or not.

- ----- code -----
  import mongoose from "mongoose";
  import DB_NAME from "./constant";
  import express from "express";
  const app = express();

(async () => {
try {
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR = ", error);
      throw err;
    });

    app.listen(`${process.env.PORT}`, () => {
      console.log(`Your app is listening on port ${process.env.PORT}`);
    });

} catch (error) {
console.log(`ERROR: ${error}`);
throw err;
}
})();

- \***\*\*\*\*\*\*\*** This is second approch for connection of mongoose to project in 'db' director and import it in index.js \***\*\*\*\*\*\*\***
  ---- code -----
  import mongoose from "mongoose";
  import express from "express";
  import { DB_NAME } from "../constant.js";
  const app = express();

const connectDB = async () => {
try {
const connectionInstance = await mongoose.connect(
`${process.env.MONGODB_URI}/${DB_NAME}`
);
console.log(`Connection Instance = `, connectionInstance);
} catch (error) {
console.log(`MONGODB CONNECTION FAILED: ${error}`);
process.exit(1); // it is nodejs method to exit from running server, it will exit if the database connation faild;
}
};

export default connectDB;

----- import DB in the index.js file -----
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
path: "./env",
});

connectDB(); // db connection

----- in package.json for dotenv -----
"scripts": {
"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
},
