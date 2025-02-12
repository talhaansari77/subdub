import { config } from "dotenv";
// import path from "path";

config({path:`.env.${process.env.NODE_ENV||'development'}.local`})

export const {PORT, NODE_ENV, DB_URI} = process.env;