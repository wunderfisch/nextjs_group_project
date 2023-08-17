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
  // console.log("paths :>> ", paths);
  return {
    paths: [paths],
    fallback: false,
  };
};

// this page doesn't receive props, only later they will be fetched
export const getStaticProps: GetStaticProps<PageType> = async (context) => {
  // no fetch in this component, only render other component

  // // Rauls code:
  //   // console.log("context :>> ", context);
  //   console.log("getProps");
  //   const productId = context.params?.productId;

  //   const response = await fetch(
  //     `https://fakestoreapi.com/products/${context}`
  //   );
  //   const result: ProductType = await response.json();
  //   //   console.log("result :>> ", result);

  return {
    // props: what?
  };
};

// // this page doesn't receive props, only later they will be fetched
// export const getStaticProps:GetStaticProps<
// // some promise
// > =async (params:type) => {
//   // no fetch here
// }

export default function Section() {
  const params = useRouter();

  const language: any = params.query.section;

  return (
    <div>
      {language && (
        <div key={language}>
          <FetchData pathname={language} />
        </div>
      )}
    </div>
  );
}
