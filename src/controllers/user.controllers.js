import { User } from "../models/user.models.js";
import responseHandler from "../utils/responseHandler.js";

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

export { getAllUsers };