import {ComponentViewPin} from "../models/Component.model";
import {ViewCode} from "../models/RaspberryPiViewCode.model";
import {Gpio} from "onoff";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class RaspberryPiDriver {
    changePinStatusFor(componentPin: ComponentViewPin, status: ViewCode) {
        console.log(`start changing ${componentPin} to status ${status}`);
        const led = new Gpio(componentPin, 'out');
        led.writeSync(status);
        console.log(`Done changing ${componentPin} to status ${status}`);
    }

    getPinStatusFor(componentPin: ComponentViewPin): number {
        const led = new Gpio(componentPin, 'out');
        return led.readSync();
    }
}