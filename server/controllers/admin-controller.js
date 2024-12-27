const User = require("../models/User");
const Contact = require("../models/contact")

const getAllusers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });

        if (!users || users.length === 0) {
            return res.status(404).json({ msg: "Users Not Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}

//contact getall
const getAllcontacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ msg: "Contacts Not Found" });
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

// Delete user by ID
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if user exists
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete the user
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

// Update user by ID
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Check if user exists
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user
        const updatedUser = await User.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
            runValidators: true, // Enforce validation rules
        });

        res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

module.exports = { getAllusers, getAllcontacts, deleteUser, updateUser };