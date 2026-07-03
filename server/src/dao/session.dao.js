import sessionModel from "../models/session.model.js";

//-------Create new session-------->>
export const createSession = async ({ userId, refreshToken }) => {
  const session = await sessionModel.create({ userId, refreshToken })
  return session
}

//-------retrive session by valid userId--------->>
export const getSessionByUserId = async (userId) => {
  const session = await sessionModel.findOne({ userId })
  return session
}