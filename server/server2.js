import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());


// Apply CORS middleware to Express
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/chatApp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Message Schema and Model
const messageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// Serve the React app (you'll set this up later)
app.use(express.static("client/build"));

// Handle socket connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Load all previous messages from the database and send them to the new client
  Message.find().then((messages) => {
    socket.emit("loadMessages", messages);
  });

  // Handle receiving and broadcasting messages
  socket.on("sendMessage", (message) => {
    console.log("Message received:", message);

    // Save the message to MongoDB
    const newMessage = new Message({
      sender: message.sender,
      text: message.text,
    });

    newMessage
      .save()
      .then((savedMessage) => {
        io.emit("receiveMessage", savedMessage); // Broadcast saved message to all clients
      })
      .catch((err) => {
        console.error("Error saving message:", err);
      });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
  