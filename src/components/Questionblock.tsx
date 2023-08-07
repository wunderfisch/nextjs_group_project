import React from "react";

type Props = {
  questionx: { id: number; question: string; answer: string };
};

export default function Questionblock({ questionx }: Props) {
  // console.log("id :>> ", question);
  const { id, question, answer } = questionx;
  return (
    <div className="border px-3 py-4 ">
      <div>
        Question {id}: {question}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        relveal answer
      </button>
      <div>Answer: {answer}</div>
    </div>
  );
}
