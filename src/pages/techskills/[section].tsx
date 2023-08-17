import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Questionblock from "@/components/Questionblock";
import Head from "../../../node_modules/next/head";

interface PropsType {
  result: [questioninterface];
  language: string;
}

interface questioninterface {
  id: number;
  question: string;
  answer: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prefetchedPages = [
    "html",
    "css",
    "javascript",
    "react",
    "advanced-react",
  ];
  const paths = prefetchedPages.map((prefetchedPage) => {
    return { params: { section: prefetchedPage } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const language = context.params?.section;

  const response = await fetch(
    `http://127.0.0.1:3000/api/staticdata?language=${language}`
  );
  const result = await response.json();
  return {
    props: { result, language },
  };
};

export default function Section(props: PropsType) {
  const language = props.language;
  const result = props.result;
  return (
    <div>
      <Head>
        <title key="title">`Questions on ${language}`</title>
      </Head>

      <h1>{`Questions on ${language}`}</h1>
      <div>
        {result &&
          result.map((question: questioninterface) => {
            return (
              <div key={question.id}>
                <Questionblock questionx={question} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
