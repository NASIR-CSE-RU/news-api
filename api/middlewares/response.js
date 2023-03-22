function formatResponse(statusCode, message, data) {
    return {
      statusCode,
      message,
      data,
    };
  }
  
  const sendResponse = (req, res, next) => {
    res.sendResponse = (statusCode, message, data) => {
      const formattedResponse = formatResponse(statusCode, message, data);
      res.status(statusCode).json(formattedResponse);
    };
    next();
  }
  export default sendResponse;