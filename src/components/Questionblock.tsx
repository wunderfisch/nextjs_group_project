import React, { useState } from "react";
import styles from "./Questions.module.css";

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
            <h2 className={`text-lg font-bold mb-2 text-black-200`}>
              Question {id}
            </h2>
            {answerVisible ? (
              <div className={`${styles["answer-bubble"]} mt-4`}>{answer}</div>
            ) : (
              <div className={`${styles["question-bubble"]} mb-4`}>
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
