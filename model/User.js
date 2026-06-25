const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required!"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    
    age: {
        type: Number,
        min: [0, "Age cannot be negative"]
    },

}, { timestamps: true }

);

const User = mongoose.model('User', userSchema);

module.exports = User;