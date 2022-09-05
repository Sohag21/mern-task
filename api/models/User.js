const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    country:{
        type: String,
    },
    gender:{
        type: String,
    },
    device:{
        type: String,
        required: true,
    },
    logTime:{
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);