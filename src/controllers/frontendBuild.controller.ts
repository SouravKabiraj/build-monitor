import {ComponentBuildService} from "../services/componentBuild.service";

export class FrontendBuildController {
    constructor(private frontendBuildService: ComponentBuildService) {

    }

    async getBuildStatus(): Promise<boolean> {
        return;
    }
}