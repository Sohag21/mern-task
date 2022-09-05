const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./db/users");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGODB)
.then(console.log("Connected to MongoDB!"))
.catch((err)=>console.log(err));

// import data 
const importData = async ()=>{
    try {
        await User.deleteMany();
        const createUsers = await User.insertMany(users)
        console.log("data imported!");
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};

// destroy data 
const dataDestroy = async ()=>{
    await User.deleteMany();
    console.log("error");
    process.exit()
}

if (process.argv[0]=== "-d") {
    dataDestroy()
}else{
    importData()
}