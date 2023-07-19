import { refresh } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    refresh(req, res);
  } else {
    return res.status(500).json({
      status: "error",
      message: "No matching route",
    });
  }
};

export default handler;
