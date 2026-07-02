import express from "express"
import cookieParser from "cookie-parser"
import indexRouter from "./routes/index.route.js"


export default function createApp() {
  const app = express()

  //-----Middleware---------
  app.use(express.json())
  app.use(cookieParser())

  //----Router-------->>
  app.use('/api', indexRouter)

  return app
}