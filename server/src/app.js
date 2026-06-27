import express from "express"
import cookieParser from "cookie-parser"


export default function createApp() {
  const app = express()

  //-----Middleware---------
  app.use(express.json())
  app.use(cookieParser())

  return app
}