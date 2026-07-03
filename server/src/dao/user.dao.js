import userModel from "../models/user.model.js";

//-----Create new user------------->>
export const createUser = async ({ username, email, password }) => {

  const user = await userModel.create({ username, email, password })

  return user
}


//----------Find User by email and username-------------->>
export const getUserByEmailOrUsername = async ({ email, username }) => {
  const user = await userModel.findOne({
    $or: [
      { email },
      { username }
    ]
  })

  return user
}