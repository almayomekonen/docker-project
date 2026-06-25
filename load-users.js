require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./model/User.js');

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    age: 25,
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    age: 30,
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 22,
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    age: 28,
  },
  {
    name: "David Brown",
    email: "david@example.com",
    age: 35,
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    age: 27,
  },
  {
    name: "Chris Miller",
    email: "chris@example.com",
    age: 31,
  },
  {
    name: "Jessica Taylor",
    email: "jessica@example.com",
    age: 24,
  },
  {
    name: "Daniel Anderson",
    email: "daniel@example.com",
    age: 29,
  },
  {
    name: "Olivia Thomas",
    email: "olivia@example.com",
    age: 26,
  },
];

async function insertUsers() {
    try {

        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.26zhx4l.mongodb.net/${process.env.DB_NAME}`)

        console.log("we connected to db ✅");

        // await User.deleteMany({})
        // console.log("previus users deleted!");
        
        await User.insertMany(users);
        console.log("users loaded inti the db successfully");
    } catch (error) {
        console.error("something went wrong", error.message);
    }finally {
       await mongoose.disconnect();
       console.log("closed connection bye bye 👋");
    }
}

insertUsers();
