import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    const jsonDirectory = path.join(process.cwd(), "data");
    const fileContents = await fs.readFile(
      // instead of hardcoded path to json file, url parameter decides the path
      //  jsonDirectory +  `${section}questions.json`,
      jsonDirectory + "/cssquestions.json",
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
