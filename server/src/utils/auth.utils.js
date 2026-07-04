import jwt from "jsonwebtoken"
import config from "../config/config.js"


export const generateAccessToken = (userId) => {
  const accessToken = jwt.sign({ userId }, config.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
  return accessToken
}

export const generateRefreshToken = (userId) => {
  const refreshToken = jwt.sign({ userId }, config.JWT_REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
  return refreshToken
}