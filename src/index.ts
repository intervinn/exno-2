import { ExtendedClient } from "./structs/ExtendedClient"

require("dotenv").config()

const client = new ExtendedClient(process.env.DISCORD_TOKEN as string)