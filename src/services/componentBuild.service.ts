import {BuildResult} from "../models/buildResult";
import {injectable} from 'inversify';
import "reflect-metadata";
import {GoCdGateway} from "../gateways/goCd.gateway";
import {buildNameSeparator, Component, Stage} from "../models/component.model";

@injectable()
export class ComponentBuildService {
    constructor(private goCdGateway: GoCdGateway) {

    }

    async getFrontendBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.Frontend + buildNameSeparator + Stage.Build);
    }

    async getBackendBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.Backend + buildNameSeparator + Stage.Build);
    }

    async getAdminBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.Admin + buildNameSeparator + Stage.Build);
    }

    async getFileManagementServiceBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.FileManagementService + buildNameSeparator + Stage.Build);
    }

    async getPartnersFrontendBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.PartnersFrontend + buildNameSeparator + Stage.Build);
    }

    async getPartnerServiceBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.PartnerService + buildNameSeparator + Stage.Build);
    }
}