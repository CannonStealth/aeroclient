import { ClientEvents, Message } from "discord.js";
import AeroClient from ".";

/**
 * An event handler that the client will load.
 */
export interface EventHandler {
    /**
     * Name of event
     */
    name: keyof ClientEvents;
    /**
     * Run once
     */
    once: boolean;
    /**
     * Event callback
     * @this {this} `this` in the callback refers to the client.
     */
    callback: <K extends keyof ClientEvents>(...args: ClientEvents[K]) => any;
}

/**
 * A middleware callback's context.
 */
export type MiddlewareContext = {
    message: Message;
    args: string[];
    command: Command;
};

/**
 * Represents a command callback for execution of the command.
 */
export type CommandCallback = (context: {
    message: Message;
    args: string[];
    client: AeroClient;
    text: string;
}) => unknown;

/**
 * A command that the client will load.
 */
export interface Command {
    /**
     * Name of the command.
     */
    name: string;
    /**
     * Aliases of the command.
     */
    aliases?: string[];
    /**
     * The command's category.
     */
    category?: string;
    /**
     * Are arguments required to execute the command?
     */
    args?: boolean;
    /**
     * The command's usage.
     */
    usage?: string;
    /**
     * The command's cooldown in seconds.
     */
    cooldown?: number;
    /**
     * Description of the command.
     */
    description?: string;
    /**
     * A more thorough and longer description.
     */
    details?: string;
    /**
     * Can this command only be executed in a guild?
     */
    guildOnly?: boolean;
    /**
     * Can this command only be executed by bot staff?
     */
    staffOnly?: boolean;
    /**
     * Can this command only be executed in a direct message?
     */
    dmOnly?: boolean;
    /**
     * Can this command only be executed in NSFW channels?
     */
    nsfw?: boolean;
    /**
     * Should this be hidden from the default help command?
     */
    hidden?: boolean;
    /**
     * The callback to execute.
     */
    callback: CommandCallback;
}

/**
 * Stored responses for the bot for use in standard situations like an error or cooldown.
 */
export type ResponseInfo = {
    /**
     * Response to send when the command is in cooldown.
     */
    cooldown?: string;
    /**
     * Response to send when an error occurs.
     */
    error?: string;
    /**
     * Response to send when the usage is incorrect.
     */
    usage?: string;
    /**
     * Reponse to send when an NSFW command is used in a SFW channel.
     */
    nsfw?: string;
    /**
     * Response to send when a guild only command is used in a direct message.
     */
    guild?: string;
    /**
     * Response to send when an attempt to disable a guarded command fails.
     */
    guarded?: string;
    /**
     * Response to send when a direct message only command is used in  a guild.
     */
    dm?: string;
    /**
     * Response to send when a non-staff user attempts to use a staff only command.
     */
    staff?: string;
};

/**
 * Options for the client.
 */
export interface AeroClientOptions {
    /**
     * The client's token.
     */
    token?: string;
    /**
     * The client's prefix.
     */
    prefix?: string;
    /**
     * Debugging option.
     */
    logging?: boolean;
    /**
     * Custom log header.
     */
    loggerHeader?: string;
    /**
     * Logger flags option.
     */
    loggerShowFlags?: boolean;
    /**
     * Directory to load command files.
     */
    commandsPath?: string;
    /**
     * Directory to load event files.
     */
    eventsPath?: string;
    /**
     * Path to load the JSON with messages.
     */
    messagesPath?: string;
    /**
     * Connection string for Keyv.
     */
    connectionUri?: string;
    /**
     * Use default commands.
     */
    useDefaults?: boolean;
    /**
     * Store cooldowns in database to be persistent.
     */
    persistentCooldowns?: boolean;
    /**
     * Responses for the bot to use in standard situations.
     */
    responses?: ResponseInfo;
    /**
     * Array of ids of staff users.
     */
    staff?: string[];
    /**
     * Custom handler instead of default one.
     */
    customHandler?: (message: Message) => unknown;
    /**
     * Custom callback when client is ready.
     */
    readyCallback?: () => void;
}
