import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

// Load environment variables from .env file
require('dotenv').config();

// Create an instance of Configuration with the OpenAI API key
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize an instance of OpenAIApi with the configuration
const openai = new OpenAIApi(config);

// Async function to generate an image based on the provided message
const getImage = async (message: string) => {
  // Send an image request to the OpenAI API
  const res = await openai.createImage({
    prompt: message,
    n: 5,
    size: '1024x1024',
  });

  // Return the data received from the API
  return res.data;
};

// Async function to generate text based on the provided message
const getText = async (message: string) => {
  // Send a completion request to the OpenAI API with text-davinci-003 model
  const res = await openai.createCompletion({
    prompt: message,
    model: 'text-davinci-003',
    temperature: 0,
    max_tokens: 1000,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });

  // Return the data received from the API
  return res.data;
};

// Default export of the Next.js API handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Extract the 'type' and 'message' properties from the request body
    const { type, message } = req.body;

    // Check if the type is 'text'
    if (type === 'text') {
      // If 'type' is 'text', call the getText function to generate text
      const data = await getText(message);

      // Check if the API response contains choices
      if (data?.choices?.length) {
        // If choices are available, send the generated text back as a JSON response
        res.json({ text: data.choices[0].text });
        return;
      }
    } else {
      // If 'type' is not 'text', assume it is 'image', and call the getImage function to generate an image
      const data = await getImage(message);

      // Check if the API response contains image data
      if (data?.data) {
        // If image data is available, send the generated images back as a JSON response
        res.json({ images: data.data.map((obj) => ({ image: obj.url })) });
        return;
      }
    }

    // If the response data is not available, return an error response
    res.status(404).json({ error: 'Data not found' });
  } catch (e) {
    // Catch any errors that occur during API call or processing
    console.log(e);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
