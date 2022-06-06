const errorRes = (res, err, errMsg = 'Internal Server Error', statusCode = 500) => {
  console.error(err);
  return res.status(statusCode).json({
    success: false,
    error: err,
    message: errMsg
  });
}

const successRes = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
}

module.exports = {
  errorRes,
  successRes,
}