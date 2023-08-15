import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  console.log("req :>> ", req.body.language);
  console.log("req :>> ", req);
  try {
    const jsonDirectory = path.join(process.cwd(), "data");
    const fileContents = await fs.readFile(
      // instead of hardcoded path to json file, url parameter decides the path
      //  jsonDirectory +  `${pathname}questions.json`,
      // jsonDirectory + "/cssquestions.json",
      jsonDirectory + `/${req.body.language}questions.json`,
      "utf8"
    );
    // console.log("fileContents :>> ", fileContents);
    // parse the data on the server side
    const parsedata = JSON.parse(fileContents);
    console.log("parsedata :>> ", parsedata);
    res.status(200).json(parsedata);
  } catch (error) {
    console.log("error :>> ", error);
  }
}
