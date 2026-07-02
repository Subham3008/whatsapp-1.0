import createApp from "./src/app.js"
import connectDB from "./src/config/db.js"
import logger from "./src/config/logger.js"
import config from "./src/config/config.js"



const app = createApp()

await connectDB()

app.listen(config.PORT, () => {
  logger.info({port: config.PORT}, "server is running on port")
})
