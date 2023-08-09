import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const CoverLetterGenerator = () => {
  const [input, setInput] = useState("");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [showGeneratedLetter, setShowGeneratedLetter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateCoverLetter = async () => {
    setIsLoading(true);
    const data = {
      type: "text",
      message: input,
    };

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();

      if (responseData?.text) {
        setGeneratedLetter(responseData.text);
        setShowGeneratedLetter(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCoverLetter = () => {
    const blob = new Blob([generatedLetter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cover_letter.txt";
    link.click();
  };

  const remakeCoverLetter = () => {
    setShowGeneratedLetter(false);
    setInput("");
    setGeneratedLetter("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white-100 py-8">
      {!showGeneratedLetter ? (
        <div className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Generate Your Cover Letter</h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your details here..."
            className="border p-2 mb-4 w-full rounded-md resize-none text-gray-800"
            rows={6}
          />
          <button
            onClick={generateCoverLetter}
            className={`bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Cover Letter"}
          </button>
        </div>
      ) : (
        <div className="mt-6 p-4 bg-gray-400 rounded-lg shadow-lg w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2">Generated Cover Letter:</h3>
          <pre className="bg-white p-4 rounded-md shadow-md overflow-auto whitespace-pre-wrap text-gray-800">{generatedLetter}</pre>
          <button
            onClick={downloadCoverLetter}
            className="flex items-center justify-center mt-4 bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition duration-300 relative"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            <span className="opacity-0.7 top-0 left-0 w-full h-full flex items-center justify-center transition-opacity ">
              Click to Download
            </span>
          </button>
          <button
            onClick={remakeCoverLetter}
            className="flex items-center justify-center mt-4 bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition duration-300"
          >
            Remake
          </button>
        </div>
      )}
    </div>
  );
};

export default CoverLetterGenerator;






