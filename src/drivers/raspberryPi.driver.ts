import {ComponentViewPin} from "../models/component.model";
import {ViewCode} from "../models/raspberryPiViewCode.model";
import {Gpio} from "onoff";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class RaspberryPiDriver {
    changePinStatusFor(componentPin: ComponentViewPin, status: ViewCode) {
        const led = new Gpio(componentPin, 'out');
        led.writeSync(status);
    }

    getPinStatusFor(componentPin: ComponentViewPin): number {
        const led = new Gpio(componentPin, 'out');
        return led.readSync();
    }
}