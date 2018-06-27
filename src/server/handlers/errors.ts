// handle error status
const statusHandler = (err, _req, _res, next) => {
  if (
    err.name === "ValidationError" ||
    err.name === "SyntaxError" ||
    err.name === "CastError"
  ) {
    err.status = 400;
  }
  next(err);
};

// server error
const errorHandler = (err, _req, res, _next) => {
  // TODO: クライアント側に返すTODOの内容を設定する
  console.error(err);
  res.status(err.status || 500);
  res.json(err);
};

export default [statusHandler, errorHandler];
