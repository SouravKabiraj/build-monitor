import {Component, ComponentModel} from "../models/component.model";
import {ViewCode} from "../models/raspberryPiViewCode.model";
import {RaspberryPiDriver} from "../drivers/raspberryPi.driver";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class ComponentOutputDriverService {
    constructor(private view: RaspberryPiDriver) {
    }

    updateBuildStatusFor(component: Component, componentStatus: ViewCode) {
        const viewPin = ComponentModel.getComponentViewPinFor(component);
        try {
            this.view.changePinStatusFor(viewPin, componentStatus);
        } catch (e) {
            console.log(`${component} ----> ${componentStatus}`)
        }
    }

    getBuildStatusFor(component: Component): ViewCode {
        const viewPin = ComponentModel.getComponentViewPinFor(component);
        return this.view.getPinStatusFor(viewPin);
    }
}

