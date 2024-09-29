import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post('/api/chatbot/generate', { message });
      setResponse(res.data.reply);
    } catch (error) {
      console.error(error);
      setResponse('Error generating response.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">Chat with AI</h1>
        <textarea
          className="w-full border p-2 mb-4 rounded"
          rows="4"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={sendMessage}
        >
          Send Message
        </button>
        {response && <div className="mt-4 p-4 bg-gray-100 rounded">{response}</div>}
      </div>
    </div>
  );
}

export default App;