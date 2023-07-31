import React, { SyntheticEvent, useState } from 'react';
import { motion } from 'framer-motion';

const ImagePage = () => {
  const [message, setMessage] = useState('');

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const data = {
      type: 'image',
      message,
    };

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responseData = await res.json();
      // Handle the response as needed
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-primary min-h-screen text-white flex items-center justify-center">
      <motion.div
        className="image-modal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={onSubmit}>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message" />
          <button type="submit">Send</button>
        </form>
      </motion.div>
    </div>
  );
};

export default ImagePage;
