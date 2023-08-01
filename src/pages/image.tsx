import React, { SyntheticEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageData {
  image: string;
}

const ImagePage = () => {
  const [message, setMessage] = useState('');
  const [images, setImages] = useState<ImageData[]>([]);

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

      // If the API response contains images, update the state to display them
      if (responseData?.images) {
        setImages(responseData.images);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearMessage = () => {
    setMessage('');
    setImages([]);
  };

  return (
    <div className="bg-primary min-h-screen text-white flex items-center justify-center">
      <motion.div
        className="image-modal bg-white p-8 rounded-md shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={onSubmit} className="flex flex-col items-center space-y-4 text-green-800">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
          {images.length > 0 && (
            <button
              type="button"
              onClick={clearMessage}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Clear Message
            </button>
          )}
        </form>

        {/* Display the generated images */}
        {images.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Generated Image:</h2>
            <Image src={images[0].image} alt="Generated Image" className="mt-2 rounded-lg" width={300} height={300} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ImagePage;
