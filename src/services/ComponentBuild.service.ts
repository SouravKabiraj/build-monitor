import {BuildResult} from "../models/BuildResult";
import {injectable} from 'inversify';
import "reflect-metadata";
import {GoCdGateway} from "../gateways/GoCd.gateway";
import {buildNameSeparator, Component, Stage} from "../models/Component.model";

@injectable()
export class ComponentBuildService {
    constructor(private goCdGateway: GoCdGateway) {

    }

    async getFrontendBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.Frontend + buildNameSeparator + Stage.QA);
    }

    async getBackendBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.Backend + buildNameSeparator + Stage.QA);
    }

    async getAdminBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.Admin + buildNameSeparator + Stage.QA);
    }

    async getFileManagementServiceBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.FileManagementService + buildNameSeparator + Stage.QA);
    }

    async getPartnersFrontendBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.PartnersFrontend + buildNameSeparator + Stage.QA);
    }

    async getPartnerServiceBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.PartnerService + buildNameSeparator + Stage.QA);
    }

    async getEligibilityCheckServiceBuildDetails(): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === Component.EligibilityCheckService + buildNameSeparator + Stage.QA);
    }
}