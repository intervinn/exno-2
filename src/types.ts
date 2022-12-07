import { ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver, GuildMember, Interaction, PermissionResolvable } from "discord.js";
import { ExtendedClient } from "./structs/ExtendedClient";

export interface ExtendedInteraction extends CommandInteraction {
    member : GuildMember
}

interface RunOptions {
    client : ExtendedClient,
    interaction : ExtendedInteraction,
    args : CommandInteractionOptionResolver,
}

type RunFunction = (options : RunOptions) => any

export type CommandType = {
    userPermissions?: PermissionResolvable[],
    run : RunFunction,
} & ChatInputApplicationCommandData