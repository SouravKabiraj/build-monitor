import {expect} from 'chai';
import {instance, mock, when} from 'ts-mockito';
import {suite, test} from "mocha-typescript";
import {ComponentBuildService} from "../../src/services/componentBuild.service";
import {FrontendBuildController} from "../../src/controllers/frontendBuild.controller";
import {BuildResult} from "../../src/models/buildResult";

@suite
class FrontendBuildControllerSpec {
    private controller: FrontendBuildController;
    private frontendBuildService: ComponentBuildService = mock(ComponentBuildService);

    before(): void {
        this.controller = new FrontendBuildController(instance(this.frontendBuildService));
    }

    @test
    public async shouldReturnBuildResultOfFrontendController(): Promise<void> {
        const buildResult: BuildResult = {
            name: "Frontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };

        when(this.frontendBuildService.getFrontendBuildDetails()).thenResolve(buildResult);

        const buildStatus = await this.controller.getBuildStatus();
        expect(buildStatus).to.be.true;
    }
}