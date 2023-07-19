import { NextApiRequest, NextApiResponse } from "next";
import { addRole } from "../../../controller/role";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      addRole(req, res);
      break;

    default:
      break;
  }
};

export default handler;
