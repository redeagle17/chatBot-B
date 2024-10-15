import { User } from "../models/user.models.js";
import responseHandler from "../utils/responseHandler.js";
import { hash } from "bcrypt";

const getAllUsers = async (req, res, next) => {

    try {
        const users = await User.find();
        if (users.length === 0){
            return res.status(404).json(responseHandler(404, "All users data not found"))
        }
        return res.status(200).json(responseHandler(200, "All users fetched successfully", users));
    } catch (error) {
        next(error);
    }
};

const userSignup = async (req, res, next) => {
    try {

        const { name, email, password, confirmPassword } = req.body;
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json(responseHandler(400, "All fields are required"));
        }
    
        const normalizedEmail = email.toLowerCase();
        const user = await User.findOne({ email: normalizedEmail });
    
        if (user) {
            return res.status(409).json(responseHandler(409, "User with this email already exists"));
        }
    
        if (password !== confirmPassword) {
            return res.status(400).json(responseHandler(400, "Password does not match"));
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json(responseHandler(400, "Invalid email format"));
        }
    
        if (password.length < 6) {
            return res.status(400).json(responseHandler(400, "Password must be at least 6 characters long"));
        }
    
        const hashedPassword = await hash(password, 10);
        const newUser = new User({
            name: name,
            email: normalizedEmail,
            password: hashedPassword,
        });
    
        await newUser.save();

        const createdUser = { user_id: newUser.user_id, name: newUser.name, email: newUser.email };

        res.status(201).json(responseHandler(201, "User registered successfully", createdUser));

    } catch (error) {
        next(error);
    }
}

export { getAllUsers, userSignup };