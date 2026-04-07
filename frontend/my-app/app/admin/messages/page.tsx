"use client";

import { useState } from "react";

// define the sheap of reply
interface Reply {
  id: number;
  text: string;
  date: string;
}
// define the shape of message
interface Message {
  id: number;
  name: string; 
  email: string;
  subject: string;
  message: string;
  status: "read" | "unread";
  date: string;
  replies: Reply[];
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      subject: "Project Inquiry",
      message: "I want to build a website...",
      status: "unread",
      date: "Apr 2, 2026",
      replies: []
    },
    {
      id: 2,
      name: "Sara",
      email: "sara@mail.com",
      subject: "Service Question",
      message: "Can you help with branding?",
      status: "read",
      date: "Apr 1, 2026",
      replies: []
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [replyText, setReplyText] = useState("");
  // Mark as read
  const handleSelect = (msg: any) => {
    setSelectedMessage(msg);

    setMessages((prev) =>
      prev.map((m) =>
        m.id === msg.id ? { ...m, status: "read" } : m
      )
    );
  };

  // Delete
  const handleDelete = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id));
    setSelectedMessage(null);
  };
//   reply to message (demo)
const handleReply = () => {
    if (!replyText.trim()) return;

    const newReply = {
        id: Date.now(),
        text: replyText,
        date: new Date().toLocaleString(),
    }

   const updatedMessages = messages.map((m) =>
      m.id === selectedMessage.id
        ? { ...m, replies: [...m.replies, newReply] }
        : m
    );

    setMessages(updatedMessages);

    // update selected message to show new reply
     const updatedSelected = updatedMessages.find(
        (m) => m.id === selectedMessage.id
     )
        setSelectedMessage(updatedSelected);
    setReplyText("");
}

  return (
    <div className="flex h-screen bg-gray-50 text-black">

      {/* 📩 LEFT: MESSAGE LIST */}
      <div className="w-full md:w-[350px] rounded-lg bg-gray-100 overflow-y-auto">

        <div className="p-4 font-semibold rounded-t-lg bg-gray-200 text-gray-800">
          Messages
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => handleSelect(msg)}
            className={`p-4 cursor-pointer rounded-lg hover:bg-red-300 ${
              msg.status === "unread" ? "bg-gray-100" : ""
            }`}
          >
            <p className="font-medium">{msg.name}</p>
            <p className="text-sm text-gray-500">{msg.subject}</p>
            <p className="text-xs text-gray-400">{msg.date}</p>
          </div>
        ))}
      </div>

      {/* 📄 RIGHT: MESSAGE DETAILS */}
      <div className="flex-1 p-6 flex flex-col">

        {!selectedMessage ? (
          <div className="text-gray-400 text-center mt-20">
            Select a message to view
          </div>
        ) : (
          <div className="flex flex-col h-full">

            {/* Message Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  {selectedMessage.subject}
                </h2>

                <button
                  onClick={() => handleDelete(selectedMessage.id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>

              <div className="text-sm text-gray-500">
                <p><strong>From:</strong> {selectedMessage.name}</p>
                <p><strong>Email:</strong> {selectedMessage.email}</p>
                <p><strong>Date:</strong> {selectedMessage.date}</p>
              </div>

              <div className="pt-4  text-gray-700">
                {selectedMessage.message}
              </div>
            </div>

            {/*  REPLIES THREAD */}
            <div className="flex-1 mt-6 space-y-4 overflow-y-auto">

              {selectedMessage.replies.length === 0 ? (
                <p className="text-gray-400 text-sm text-center">
                  No replies yet
                </p>
              ) : (
                selectedMessage.replies.map((reply: any) => (
                  <div
                    key={reply.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-sm text-gray-700">
                      {reply.text}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {reply.date}
                    </p>
                  </div>
                ))
              )}

            </div>

            {/*  REPLY BOX */}
            <div className="mt-4 flex gap-3">

              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="flex-1 border p-3 rounded-lg"
              />

              <button
                onClick={handleReply}
                className="bg-red-500 text-white px-5 rounded-lg"
              >
                Send
              </button>

            </div>

          </div>
        )}
      </div>

    </div>
  );
}