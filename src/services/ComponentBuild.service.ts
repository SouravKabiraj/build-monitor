import {BuildResult} from "../models/BuildResult";
import {injectable} from 'inversify';
import "reflect-metadata";
import {GoCdGateway} from "../gateways/GoCd.gateway";
import {buildNameSeparator, Stage} from "../models/Component.model";

@injectable()
export class ComponentBuildService {
    constructor(private goCdGateway: GoCdGateway) {

    }

    async getBuildDetailsFor(component: string): Promise<BuildResult> {
        const completeBuildResult = await this.goCdGateway.getCompleteBuildDetails();
        return completeBuildResult.find(buildResult => buildResult.name === component + buildNameSeparator + Stage.QA);
    }
}