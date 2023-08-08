// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("req :>> ", req);
  //   try this code from static data
  try {
    const jsonDirectory = path.join(process.cwd(), "data");
    const fileContents = await fs.readFile(
      jsonDirectory + "/htmlquestions.json",
      "utf8"
    );
    // console.log("fileContents :>> ", fileContents);
    // parse the data on the server side
    const parsedata = JSON.parse(fileContents);

    res.status(200).json(parsedata);
  } catch (error) {
    console.log("error :>> ", error);
  }
}
