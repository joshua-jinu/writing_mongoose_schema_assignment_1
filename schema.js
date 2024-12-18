const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String]
    },
    profile: profileSchema,
    lastLogin: {
        type: Date,
        default: ()=>Date.now()
    }
})

userSchema.pre("save", function(next){
    this.lastLogin = Date.now();
    next();
})

module.exports = mongoose.model("User", userSchema);