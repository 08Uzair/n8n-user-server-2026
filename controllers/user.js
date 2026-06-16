import { user } from "../models/users.js";

// create user
export const createUser = async (req, res) => {
  const { name, email, address, status } = req.body;
  const saveData = new user({
    name,
    email,
    address,
    status,
    createdAt: new Date().toISOString(),
  });
  try {
    await saveData.save();
    res.status(200).json({ message: "Added Sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });

  }
};

//Get user
export const getUsers = async (req, res) => {
  try {
    const userData = await user.find().sort({ createdAt: -1 });

    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed" });
  }
};

// Get user by Id
export const getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await user.findById(id);

    if (!userData) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, address, status } = req.body;

  try {
    const updatedData = {
      name,
      email,
      address,
      status,
    };

    const updatedUser = await user.findByIdAndUpdate(
      id,
      updatedData,
      {
        returnDocument: "after",
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    res.status(200).json({
      updateMember: updatedUser,
      message: "Updated Successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteduser = await user.findByIdAndDelete(id);
    if (!deleteduser) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Search user
export const searchUser = async (req, res) => {
  const searchTerm = req.query.q; // Assuming 'q' as the search parameter
  try {
    const results = await user.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search for name
        { email: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search for title
        { address: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search for content
        { active: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search for content
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
