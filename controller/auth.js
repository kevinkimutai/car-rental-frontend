import { createUser } from "../model/user";
import bcrypt from "bcryptjs";
import { generateRefreshToken, generateAccessToken } from "../utils/token";
import { jwt } from "jsonwebtoken";

export const signUp = async (req, res) => {
  const {
    fname,
    lname,
    password,
    email,
    phone_number,
    // id_number,
    // license_number,
  } = req.body;

  console.log(req.body);

  if (
    !fname ||
    !lname ||
    !password ||
    !email ||
    // !address ||
    !phone_number
    // !id_number
    // !license_number
  ) {
    return res.status(404).json({ status: "error", message: "missing inputs" });
  }

  getUserByUserEmail(email, async (err, results) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    if (results) {
      return res.json({
        success: false,
        data: "User already exists",
      });
    }

    ///hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    const data = { password: hashedPwd, ...req.body };

    createUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: false,
        data: results,
      });
    });
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ status: "error", message: "missing inputs" });
  }

  getUserByEmail(body.email, async (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database connection errror",
      });
    }
    if (!results || (await bcrypt.compareSync(password, results.password))) {
      return res.json({
        success: false,
        data: "Invalid email or password",
      });
    }

    const accessToken = generateAccessToken(results);
    const refreshToken = generateRefreshToken(results);

    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: "None", //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });

    return res.json({
      success: true,
      message: "login successfully",
      token: accessToken,
    });
  });
};

export const refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.AUTH_REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      getUserByEmail(decoded.id, async (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Database connection errror",
          });
        }
        if (!results) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const accessToken = generateAccessToken(results);

        res.json({ accessToken });
      });
    }
  );
};
export const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};
