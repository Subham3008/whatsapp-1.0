import { config } from 'dotenv'

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not define in the enviroment varibles')
}

const _config = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:9000/',
}

export default Object.freeze(_config)