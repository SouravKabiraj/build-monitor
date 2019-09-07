import {ComponentViewPin} from "../models/Component.model";
import {ViewCode} from "../models/RaspberryPiViewCode.model";
import {Gpio} from "onoff";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class RaspberryPiDriver {
    changeBuildStatus(status: ViewCode) {
        try {
            const led = new Gpio(ComponentViewPin.BUILD_OUTPUT, 'out');
            led.writeSync(status);
        } catch (e) {
            console.log(`${ComponentViewPin.BUILD_OUTPUT} --> ${status}`);
        }
    }
}