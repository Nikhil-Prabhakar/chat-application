import { request, response } from "express";
import User from "../models/UserModel";
import { sign } from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, userId) => {
  return sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const signup = async (request, response, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return response.status(400).send("Email and Password is required.");
    }
    const user = await User.create({ email, password });
  } catch (error) {
    console.log({ error });
    return response.status(500).send("Internal Server Error");
  }
};
