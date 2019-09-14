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
            let buildResult;
            try {
                buildResult = await this.componentBuildService.getBuildDetailsFor(components[index]);
            } catch (e) {
                // when failed to fetch CICD data
                this.stopShowingStatus();
                return;
            }
            if (buildResult.lastBuildStatus === 'Failure') {
                this.showBuildFailed();
                return;
            } else {
                continue;
            }
        }
        this.showBuildSuccess();
    }

    private stopShowingStatus(): void {
        this.raspberryPiDriver.changeBuildStatusForSuccess(ViewCode.OFF);
        this.raspberryPiDriver.changeBuildStatusForFail(ViewCode.OFF);
    }

    private showBuildSuccess(): void {
        this.raspberryPiDriver.changeBuildStatusForSuccess(ViewCode.ON);
        this.raspberryPiDriver.changeBuildStatusForFail(ViewCode.OFF);
    }

    private showBuildFailed(): void {
        this.raspberryPiDriver.changeBuildStatusForSuccess(ViewCode.OFF);
        this.raspberryPiDriver.changeBuildStatusForFail(ViewCode.ON);
    }
}

