import { config } from 'dotenv'
config()

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not define in the enviroment varibles')
}

if(!process.env.PORT){
  throw new Error('PORT is not define in the enviroment varibles')
}

const _config = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:9000/',
  PORT: process.env.PORT || 5000
}

export default Object.freeze(_config)