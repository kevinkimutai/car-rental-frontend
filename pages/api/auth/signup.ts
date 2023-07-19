import { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "../../../controller/auth";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    signUp(req, res);
  } else {
    return res
      .status(404)
      .json({ status: "Error", Message: "use another method for route" });
  }
};

export default handler;
