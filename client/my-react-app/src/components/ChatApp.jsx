// import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000");

// const ChatApp = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isUser, setIsUser] = useState(true);

//   // Load previous messages when connected
//   useEffect(() => {
//     socket.on("loadMessages", (loadedMessages) => {
//       setMessages(loadedMessages);
//     });

//     // Receive messages from the backend
//     socket.on("receiveMessage", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.off("loadMessages");
//       socket.off("receiveMessage");
//     };
//   }, []);

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       const newMessage = {
//         sender: isUser ? "user" : "company",
//         name: isUser ? "User" : "Company",
//         text: message,
//       };
//       socket.emit("sendMessage", newMessage); // Send message to the server
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setMessage("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Real-time Chat</h2>

//         {/* Chat Window */}
//         <div className="space-y-4 mb-4 h-64 overflow-y-auto border-b border-gray-300 p-4">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${
//                 msg.sender === "user" ? "items-end" : "items-start"
//               }`}
//             >
//               <div className="text-sm font-semibold mb-1">
//                 {msg.name} {/* Display sender's name */}
//               </div>
//               <div
//                 className={`max-w-xs p-3 rounded-lg ${
//                   msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Message Input */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             placeholder="Type a message..."
//           />
//           <button
//             onClick={handleSendMessage}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//           >
//             Send
//           </button>
//         </div>

//         {/* Toggle between User and Company */}
//         <div className="mt-4 text-center">
//           <button
//             onClick={() => setIsUser(!isUser)}
//             className="bg-gray-200 px-4 py-2 rounded-lg"
//           >
//             Switch to {isUser ? "Company" : "User"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
