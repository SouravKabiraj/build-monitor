import {ComponentBuildService} from "./ComponentBuild.service";
import {ComponentOutputManagerService} from "./ComponentOutputManager.service";
import {Component} from "../models/Component.model";
import {ViewCode} from "../models/RaspberryPiViewCode.model";
import {injectable} from "inversify";

@injectable()
export class CicdViewManagerService {
    constructor(private componentBuildService: ComponentBuildService, private outputDriver: ComponentOutputManagerService) {
    }

    async updateCicdView(): Promise<void> {
        console.log('updating Cicd View');
        const buildResultPartnerFrontend = await this.componentBuildService.getPartnersFrontendBuildDetails();
        const buildResultAdmin = await this.componentBuildService.getAdminBuildDetails();
        const buildResultBackend = await this.componentBuildService.getBackendBuildDetails();
        const buildResultFileManagementService = await this.componentBuildService.getFileManagementServiceBuildDetails();
        const buildResultFrontend = await this.componentBuildService.getFrontendBuildDetails();
        const buildResultPartnerService = await this.componentBuildService.getPartnerServiceBuildDetails();
        const buildResultEligibilityCheckService = await this.componentBuildService.getEligibilityCheckServiceBuildDetails();
        console.log(JSON.stringify(buildResultEligibilityCheckService));

        this.outputDriver.updateBuildStatusFor(Component.PartnersFrontend, buildResultPartnerFrontend.lastBuildStatus === 'Failure' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.Admin, buildResultAdmin.lastBuildStatus === 'Failure' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.Backend, buildResultBackend.lastBuildStatus === 'Failure' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.FileManagementService, buildResultFileManagementService.lastBuildStatus === 'Failure' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.Frontend, buildResultFrontend.lastBuildStatus === 'Failure' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.PartnerService, buildResultPartnerService.lastBuildStatus === 'Failure' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.EligibilityCheckService, buildResultEligibilityCheckService.lastBuildStatus === 'Failure' ? ViewCode.OFF : ViewCode.ON);
    }
}

