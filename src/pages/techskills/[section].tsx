import React from "react";
import FetchData from "@/components/FetchData";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

interface PageType {
  // only sting for urlquery or array from the fetch?
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
  console.log("paths :>> ", paths);
  return {
    paths,
    fallback: false,
  };
};

// this page doesn't receive props, only later they will be fetched
export const getStaticProps: GetStaticProps<String> = async (context) => {
  // no fetch in this component, only render other component

  // // Rauls code:
  console.log("context :>> ", context);
  //   console.log("getProps");
  // const params = useRouter();
  const language = context.params?.section;
  console.log("language :>> ", language);
  const url = `localhost:3001/api/staticdata?language=${language}questions.json`;
  try {
    const response = await fetch(
      // `http://127.0.0.1:3001/api/staticdata?language=${language}`
      `http://127.0.0.1:3001/api/staticdata/${language}`
    );

    console.log("response :>> ", response);
    // const result = await response.json();
    // console.log("result :>> ", result);
  } catch (error) {
    console.log("error :>> ", error);
  }

  return {
    // props: what?
  };
};

export default function Section() {
  // const params = useRouter();

  // const language: any = params.query.section;

  return (
    <div>
      {" "}
      something
      {/* {language && (
        <div key={language}>
          <FetchData pathname={language} />
        </div>
      )} */}
    </div>
  );
}
