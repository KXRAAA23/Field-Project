import express from "express";
import * as dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();

const app = express();

// Enable CORS for all origins
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use UserRoutes for user-related endpoints
app.use("/api/user/", UserRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// MongoDB connection function
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log("Connected to Mongo DB"))
        .catch((err) => {
            console.error("Failed to connect with MongoDB");
            console.error(err.message);
            process.exit(1);
        });
};

// Function to start the server
const startServer = async () => {
    try {
        connectDB();
        app.listen(8080, () => console.log("Server started on port 8080"));
    } catch (error) {
        console.log(error);
    }
};

// Start the server
startServer();
