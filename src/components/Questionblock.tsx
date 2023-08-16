// import React, { useState } from "react";

// type Props = {
//   questionx: { id: number; question: string; answer: string };
// };

// export default function Questionblock({ questionx }: Props) {
//   const [answerVisible, setAnswerVisible] = useState<boolean>(false);

//   const revealAnswer = () => {
//     setAnswerVisible(true);
//   };

//   const { id, question, answer } = questionx;
//   return (
//     <div className="flex items-center justify-center mb-4">
//     <div className="flex flex-col items-center justify-center bg-gray-500 rounded-lg shadow-lg p-4 mb-4 h-32 w-1/2">
//       <div className="text-lg font-italic
//        mb-2">
//         Question {id}: {question}
//       </div>
//       {!answerVisible && (
//         <button
//           onClick={revealAnswer}
//           className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
//         >
//           Reveal Answer
//         </button>
//       )}

//       {answerVisible && <div className="mt-4"> {answer}</div>}
//     </div>
//     </div>
//   );
// }

// SECOND QUESTIONS BLOCK
// import React, { useState } from "react";

// type Props = {
//   questionx: { id: number; question: string; answer: string };
// };

// export default function Questionblock({ questionx }: Props) {
//   const [answerVisible, setAnswerVisible] = useState<boolean>(false);

//   const revealAnswer = () => {
//     setAnswerVisible(!answerVisible);
//   };

//   const { id, question, answer } = questionx;

//   return (
//     <div className="phone-screen mb-4">
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-lg font-bold mb-2 text-purple-800">
//           Question {id}
//         </h2>
//         <p className="text-gray-700 mb-4 text-center">{question}</p>
//         {!answerVisible && (
//           <button
//             onClick={revealAnswer}
//             className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded w-2/3 transform transition-transform"
//           >
//             Reveal Answer
//           </button>
//         )}
//         {answerVisible && (
//           <div className="text-green-500 font-semibold mt-4">{answer}</div>
//         )}
//         {answerVisible && (
//           <button
//             onClick={revealAnswer}
//             className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded mt-4 w-2/3"
//           >
//             Close
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


// THIRD QUESTION BLOCK
// import React, { useState } from "react";

// type Props = {
//   questionx: { id: number; question: string; answer: string };
// };

// export default function Questionblock({ questionx }: Props) {
//   const [answerVisible, setAnswerVisible] = useState<boolean>(false);

//   const revealAnswer = () => {
//     setAnswerVisible(!answerVisible);
//   };

//   const { id, question, answer } = questionx;

//   return (
//     <div className="phone-container">
//     <div className="phone-screen mb-8">
//       <div className="phone-notch"></div>
//       <div className="phone-border">
//         <div className="flex flex-col items-center justify-center p-6">
//           <h2 className="text-lg font-bold mb-2 text-purple-800">
//             Question {id}
//           </h2>
//           <p className="text-gray-700 mb-4 text-center">{question}</p>
//           {!answerVisible && (
//             <button
//               onClick={revealAnswer}
//               className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded w-2/3 transform transition-transform"
//             >
//               Reveal Answer
//             </button>
//           )}
//           {answerVisible && (
//             <div className="text-green-500 font-semibold mt-4">{answer}</div>
//           )}
//           {answerVisible && (
//             <button
//               onClick={revealAnswer}
//               className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded mt-4 w-2/3"
//             >
//               Close
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
//  FOURTH QUESTION BLOCK
// import React, { useState } from "react";

// type Props = {
//   questionx: { id: number; question: string; answer: string };
// };

// export default function Questionblock({ questionx }: Props) {
//   const [answerVisible, setAnswerVisible] = useState<boolean>(false);

//   const revealAnswer = () => {
//     setAnswerVisible(!answerVisible);
//   };

//   const { id, question, answer } = questionx;

//   return (
//     <div className="phone-screen mb-8">
//       <div className="phone-notch"></div>
//       <div className="phone-border">
//         <div className="flex flex-col items-center justify-center p-6">
//           <h2 className="text-lg font-bold mb-2 text-purple-800">
//             Question {id}
//           </h2>
//           <p className="text-gray-700 mb-4 text-center">{question}</p>
//           {!answerVisible && (
//             <button
//               onClick={revealAnswer}
//               className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded w-2/3 transform transition-transform"
//             >
//               Reveal Answer
//             </button>
//           )}
//           {answerVisible && (
//             <div className="text-green-500 font-semibold mt-4">{answer}</div>
//           )}
//           {answerVisible && (
//             <button
//               onClick={revealAnswer}
//               className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded mt-4 w-2/3"
//             >
//               Close
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
//FIFTH QUESTION BLOCK 
// import React, { useState } from "react";


// type Props = {
//   questionx: { id: number; question: string; answer: string };
// };

// export default function Questionblock({ questionx }: Props) {
//   const [answerVisible, setAnswerVisible] = useState<boolean>(false);

//   const revealAnswer = () => {
//     setAnswerVisible(!answerVisible);
//   };

//   const { id, question, answer } = questionx;

//   return (
    
//     <div className = "container">
//     <div className="phone-screen mb-8" >
//       <div className="phone-notch" ></div>
//       <div className="phone-border">
//         <div className="flex flex-col items-center justify-center p-6">
//           <h2 className="text-lg font-bold mb-2 text-purple-800">
//             Question {id}
//           </h2>
//           <div
//             className={`question-bubble mb-4 ${
//               answerVisible ? "hidden" : "block"
//             }`}
//           >
//             {question}
//           </div>
//           {!answerVisible && (
//             <button
//               onClick={revealAnswer}
//               className="bg-yellow-50 hover:bg-yellow-100 text-black py-2 px-4 rounded mt-4 w-2/3 transform transition-transform border border-black "
//             >
//               Reveal Answer
//             </button>
//           )}
//           {answerVisible && (
//             <div className="answer-bubble mt-4">{answer}</div>
//           )}
//           {answerVisible && (
//             <button
//               onClick={revealAnswer}
//               className="bg-yellow-50 hover:bg-yellow-100 text-black py-2 px-4 rounded mt-4 w-2/3 border border-black"
//             >
//               Close
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import styles from "./Questions.module.css"; // Adjust the path to your CSS module

type Props = {
  questionx: { id: number; question: string; answer: string };
};

export default function Questionblock({ questionx }: Props) {
  const [answerVisible, setAnswerVisible] = useState<boolean>(false);

  const revealAnswer = () => {
    setAnswerVisible(!answerVisible);
  };

  const { id, question, answer } = questionx;

  return (
    <div className={styles.container}>
      <div className={styles["phone-screen"]}>
        <div className={styles["phone-notch"]}></div>
        <div className={styles["phone-border"]}>
          <div className={`flex flex-col items-center justify-center p-6`}>
            <h2 className={`text-lg font-bold mb-2 text-purple-800`}>
              Question {id}
            </h2>
            {answerVisible ? (
              <div className={`${styles["answer-bubble"]} mt-4`}>{answer}</div>
            ) : (
              <div
                className={`${styles["question-bubble"]} mb-4`}
              >
                {question}
              </div>
            )}
            {!answerVisible && (
              <button
                onClick={revealAnswer}
                className={`${styles["reveal-button"]} ${styles["border"]} ${styles["border-black"]}`}
              >
                Reveal Answer
              </button>
            )}
            {answerVisible && (
              <button
                onClick={revealAnswer}
                className={`${styles["close-button"]} ${styles["border"]} ${styles["border-black"]}`}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
