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

//---Update referesh token for a session by user Id----->>
export const updateSessionByUserId = async (userId, { refreshToken }) => {
  const session = await sessionModel.findOneAndUpdate(
    { userId },
    { refreshToken },
    { new: true }
  )

  return session
}

//-------Delete  a session by the provider UserId--->>
export const deleteSessionByUserId = async (userId) => {
  const session = await sessionModel.findOneAndDelete({ userId })
  return session
}