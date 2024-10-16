import jwt from "jsonwebtoken";

const createToken = async (user_id, email, expiresIn) => {
    try {
        const payload = { user_id, email};
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn
        });
        console.log("Token generated successfully");
        return token;
    } catch (error) {
        next(error)
    }
}

export default createToken;