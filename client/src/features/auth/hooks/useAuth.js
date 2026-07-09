import { setUser, setAccessToken, setLoading, setError } from "../state/auth.slice"
import { registerUser, loginUser } from "../services/auth.api"
import { useDispatch } from "react-redux"


const useAuth = () => {
  const dispatch = useDispatch()

  const register = async ({ username, email, password }) => {
    const data = await registerUser({ username, email, password })
    dispatch(setUser(data.data.user))
    dispatch(setAccessToken(data.data.accessToken))
  }

  const login = async ({ email, password }) => {
    const data = await loginUser({ email, password })
    dispatch(setUser(data.data.user))
    dispatch(setAccessToken(data.data.tokens.accessToken))
  }

  return { register, login }
}

export default useAuth