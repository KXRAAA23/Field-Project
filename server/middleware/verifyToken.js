import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = async (req, res, next) => {
  try {
    // Check if the Authorization header is present
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }

    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];

    // If the token is not present, return an error
    if (!token) return next(createError(401, "You are not authenticated"));

    // Verify the token using the secret from the environment variable
    const decode = jwt.verify(token, process.env.JWT_SECRET); // Change JWT to JWT_SECRET
    req.user = decode; // Attach the decoded user data to the request object
    return next(); // Move to the next middleware
  } catch (err) {
    next(err); // Pass any error to the error handler
  }
};
