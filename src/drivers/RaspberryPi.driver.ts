import {ComponentViewPin} from "../models/Component.model";
import {RaspberryPiViewCodeModel, ViewCode} from "../models/RaspberryPiViewCode.model";
import {Gpio} from "onoff";
import {injectable} from "inversify";
import "reflect-metadata";
import {FileLogUtility} from "../utility/file-log.utility";

@injectable()
export class RaspberryPiDriver {
    changeBuildStatusForSuccess(status: ViewCode) {
        try {
            const ledSuccess = new Gpio(ComponentViewPin.BUILD_OUTPUT_SUCCESS, 'out');
            const ledFail = new Gpio(ComponentViewPin.BUILD_OUTPUT_FAIL, 'out');
            ledSuccess.writeSync(status);
            ledFail.writeSync(RaspberryPiViewCodeModel.getOppositViewCode(status));
        } catch (e) {
            FileLogUtility.log(`${ComponentViewPin.BUILD_OUTPUT_SUCCESS} --> ${status}`);
        }
    }

    changeBuildStatusForFail(status: ViewCode) {
        try {
            const ledFail = new Gpio(ComponentViewPin.BUILD_OUTPUT_FAIL, 'out');
            const ledSuccess = new Gpio(ComponentViewPin.BUILD_OUTPUT_SUCCESS, 'out');
            ledFail.writeSync(status);
            ledSuccess.writeSync(RaspberryPiViewCodeModel.getOppositViewCode(status));
        } catch (e) {
            FileLogUtility.log(`${ComponentViewPin.BUILD_OUTPUT_FAIL} --> ${status}`);
        }
    }
}