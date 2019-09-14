import {ComponentBuildService} from "./ComponentBuild.service";
import {ComponentModel} from "../models/Component.model";
import {ViewCode} from "../models/RaspberryPiViewCode.model";
import {injectable} from "inversify";
import {RaspberryPiDriver} from "../drivers/RaspberryPi.driver";

@injectable()
export class CicdViewManagerService {
    constructor(private componentBuildService: ComponentBuildService, private raspberryPiDriver: RaspberryPiDriver) {
    }

    async updateCicdView(): Promise<void> {
        const components = ComponentModel.getAllComponents();
        for (let index = 0; index < components.length; index++) {
            const buildResult = await this.componentBuildService.getBuildDetailsFor(components[index]);
            if (buildResult.lastBuildStatus === 'Failure') {
                this.raspberryPiDriver.changeBuildStatusForSuccess(ViewCode.OFF);
                this.raspberryPiDriver.changeBuildStatusForFail(ViewCode.ON);
                console.log(`${components[index]} build failed`);
                return;
            } else {
                continue;
            }
        }
        this.raspberryPiDriver.changeBuildStatusForSuccess(ViewCode.ON);
        this.raspberryPiDriver.changeBuildStatusForFail(ViewCode.OFF);
    }
}

