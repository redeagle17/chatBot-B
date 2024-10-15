const responseHandler = (statusCode, message = "Success", data = []) => {
    return {
        statusCode,
        data,
        message,
        success: statusCode < 400
    };
}

export default responseHandler;