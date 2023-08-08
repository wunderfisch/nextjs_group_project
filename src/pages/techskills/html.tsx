import Questionblock from "@/components/Questionblock";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Head from "../../../node_modules/next/head";

interface Htmlquestion {
  id: number;
  question: string;
  answer: string;
}

export default function HtmlQuestions() {
  const [data, setData] = useState([]);
  const fetchQuestion = async () => {
    // console.log("object :>> ", object);
    try {
      const response = await fetch("http://localhost:3000/api/myApi");
      const result: Htmlquestion = await response.json();
      //   return result;
      setData(result.html);
      //   return data;
      console.log("result :>> ", data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  {
    /* transform  result so data can be mapped*/
  }

  // run fetch everytime component is loaded
  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div>
      {/* {console.log("result :>> ", data)} */}
      <Head>
        <title key="title"></title>
      </Head>
      <h1>HTML Questions</h1>
      {/* {console.log("result.html :>> ", result.html)} */}
      <div>
        {data &&
          data.map((htmlquestion: htmlquestion) => {
            // console.log("cssquestion :>> ", cssquestion);
            return (
              <div key={htmlquestion.id}>
                <Questionblock questionx={htmlquestion} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
