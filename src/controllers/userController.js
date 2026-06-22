import Users from "../model/userModel.js"
export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({ message: "Users retrieved successfully", users });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User retrieved successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};