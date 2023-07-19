import { login } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    login(req, res);
  } else {
    return res.status(500).json({
      status: "error",
      message: "No matching route",
    });
  }
};

export default handler;
