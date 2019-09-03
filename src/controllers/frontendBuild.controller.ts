import {ComponentBuildService} from "../services/ComponentBuild.service";

export class FrontendBuildController {
    constructor(private frontendBuildService: ComponentBuildService) {

    }

    async getBuildStatus(): Promise<boolean> {
        return;
    }
}