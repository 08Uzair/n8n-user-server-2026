import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const user = mongoose.model("user", userSchema);


[
  {
    "name": "Alex Morgan",
    "email": "alex.morgan@example.com",
    "address": "123 Maple Street, Austin, TX 78701",
    "status": true
  },
  {
    "name": "Samira Khan",
    "email": "samira.k@example.com",
    "address": "456 Oak Avenue, New York, NY 10001",
    "status": false
  },
  {
    "name": "Liam Dubois",
    "email": "liam.dubois@example.com",
    "address": "789 Pine Road, Seattle, WA 98101",
    "status": true
  }
]