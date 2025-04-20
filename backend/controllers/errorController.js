const handleError = (error, req, res, next) => {
    console.error(error.stack);
    res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error',
    });
  };
  
  module.exports = handleError;