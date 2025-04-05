class ApiResponse extends Error {
  constructor(statusCode, data, message = "Success") {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
