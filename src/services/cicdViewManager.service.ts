import {ComponentBuildService} from "./componentBuild.service";
import {ComponentOutputDriverService} from "./ComponentOutputDriver.service";
import {Component} from "../models/component.model";
import {ViewCode} from "../models/raspberryPiViewCode.model";
import {injectable} from "inversify";

@injectable()
export class CicdViewManagerService {
    constructor(private componentBuildService: ComponentBuildService, private outputDriver: ComponentOutputDriverService) {
    }

    async updateCicdView(): Promise<void> {
        console.log('updating Cicd View');
        const buildResultPartnerFrontend = await this.componentBuildService.getPartnersFrontendBuildDetails();
        const buildResultAdmin = await this.componentBuildService.getAdminBuildDetails();
        const buildResultBackend = await this.componentBuildService.getBackendBuildDetails();
        const buildResultFileManagementService = await this.componentBuildService.getFileManagementServiceBuildDetails();
        const buildResultFrontend = await this.componentBuildService.getFrontendBuildDetails();
        const buildResultPartnerService = await this.componentBuildService.getPartnerServiceBuildDetails();

        this.outputDriver.updateBuildStatusFor(Component.PartnersFrontend, buildResultPartnerFrontend.lastBuildStatus === 'failed' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.Admin, buildResultAdmin.lastBuildStatus === 'failed' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.Backend, buildResultBackend.lastBuildStatus === 'failed' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.FileManagementService, buildResultFileManagementService.lastBuildStatus === 'failed' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.Frontend, buildResultFrontend.lastBuildStatus === 'failed' ? ViewCode.OFF : ViewCode.ON);
        this.outputDriver.updateBuildStatusFor(Component.PartnerService, buildResultPartnerService.lastBuildStatus === 'failed' ? ViewCode.OFF : ViewCode.ON);
    }
}

