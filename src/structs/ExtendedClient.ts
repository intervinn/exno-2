import { Client, Collection, IntentsBitField } from "discord.js";
import { glob } from "glob";
import { promisify } from "util";
import { CommandType } from "../types";

const globPromise = promisify(glob)

export class ExtendedClient extends Client {

    public commands : Collection<string, CommandType> = new Collection()
    private _token : string

    constructor(token : string) {
        super(
            {
                intents: [
                    IntentsBitField.Flags.Guilds
                ]
            }
        )
        this._token = token
    }

    private async loadEvents() {

    }

    private async loadCommands() {

    }

    private async registerCommands() {

    }

    public start() {

    }

}