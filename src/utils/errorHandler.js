const errorHandler = (err, req, res, next) => {
    console.log("The error is ", err);

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        status: "error",
        message: err.message || "Internal Server Error"
    });
};

export default errorHandler;