import React from "react";

type Props = {
  id: number;
  question: string;
  answer: string;
};

export default function Questionblock({ cssquestion }: Props) {
  console.log("id :>> ", cssquestion);
  const { id, question, answer } = cssquestion;
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
