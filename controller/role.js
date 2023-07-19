import { createRole } from "../model/role";

export const addRole = (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(404).json({ status: "error", message: "Missing input" });
  }

  ///hash password

  createRole(role, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};
