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

export const verifyAccessToken = (token) => {
  try {

    const decode = jwt.verify(token, config.JWT_ACCESS_TOKEN_SECRET)

    return decode

  } catch (error) {
    throw new Error('Invalid or expired access token')
  }
}


export const verifyRefreshToken = (token) => {
  try {

    const decode = jwt.verify(token, config.JWT_REFRESH_TOKEN_SECRET)

    return decode

  } catch (error) {
    throw new Error('Invalid or expired refresh token')
  }
}