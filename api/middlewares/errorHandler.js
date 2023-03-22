const errorHandler =(err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    const data = err.data || null;
  
    res.sendResponse(statusCode, message, data);
  }
  export default errorHandler;