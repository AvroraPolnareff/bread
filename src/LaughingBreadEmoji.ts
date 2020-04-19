import {Client, ClientOptions} from "discord.js";
import {Timer} from "./models/Timer";


export class LaughingBreadEmoji extends Client {

    public timers: Timer[];

    constructor(options? : ClientOptions) {
        super(options);
        this.timers = []
    }

}
