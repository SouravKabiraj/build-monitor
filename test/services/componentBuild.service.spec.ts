import {suite, test} from 'mocha-typescript';
import {expect} from 'chai';
import {ComponentBuildService} from "../../src/services/componentBuild.service";
import {instance, mock, when} from "ts-mockito";
import {GoCdGateway} from "../../src/gateways/goCd.gateway";
import {BuildResult} from "../../src/models/buildResult";

@suite
class ComponentBuildServiceSpec {
    private service: ComponentBuildService;
    private goCdGateway = mock(GoCdGateway);

    before(): void {
        this.service = new ComponentBuildService(instance(this.goCdGateway));
    }

    @test
    public async shouldReturnFrontendBuildBuildResult(): Promise<void> {
        const frontendBuildResult: BuildResult = {
            name: "Frontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        const backendBuildResult: BuildResult = {
            name: "Backend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        when(this.goCdGateway.getCompleteBuildDetails()).thenResolve([frontendBuildResult, backendBuildResult]);

        const buildResult = await this.service.getFrontendBuildDetails();

        expect(buildResult).to.deep.equal(frontendBuildResult);
    }

    @test
    public async shouldReturnBackendBuildBuildResult(): Promise<void> {
        const frontendBuildResult: BuildResult = {
            name: "Frontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        const backendBuildResult: BuildResult = {
            name: "Backend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        when(this.goCdGateway.getCompleteBuildDetails()).thenResolve([frontendBuildResult, backendBuildResult]);

        const buildResult = await this.service.getBackendBuildDetails();

        expect(buildResult).to.deep.equal(backendBuildResult);
    }

    @test
    public async shouldReturnAdminBuildBuildResult(): Promise<void> {
        const adminBuildResult: BuildResult = {
            name: "Admin :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        const backendBuildResult: BuildResult = {
            name: "Frontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        when(this.goCdGateway.getCompleteBuildDetails()).thenResolve([adminBuildResult, backendBuildResult]);

        const buildResult = await this.service.getAdminBuildDetails();

        expect(buildResult).to.deep.equal(adminBuildResult);
    }

    @test
    public async shouldReturnFileManagementServiceBuildBuildResult(): Promise<void> {
        const fileManagementServiceBuildResult: BuildResult = {
            name: "FileManagementService :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        const backendBuildResult: BuildResult = {
            name: "Frontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        when(this.goCdGateway.getCompleteBuildDetails()).thenResolve([fileManagementServiceBuildResult, backendBuildResult]);

        const buildResult = await this.service.getFileManagementServiceBuildDetails();

        expect(buildResult).to.deep.equal(fileManagementServiceBuildResult);
    }

    @test
    public async shouldReturnPartnersFrontendBuildBuildResult(): Promise<void> {
        const partnersFrontendBuildResult: BuildResult = {
            name: "PartnersFrontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        const backendBuildResult: BuildResult = {
            name: "Frontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        when(this.goCdGateway.getCompleteBuildDetails()).thenResolve([partnersFrontendBuildResult, backendBuildResult]);

        const buildResult = await this.service.getPartnersFrontendBuildDetails();

        expect(buildResult).to.deep.equal(partnersFrontendBuildResult);
    }

    @test
    public async shouldReturnPartnerServiceBuildBuildResult(): Promise<void> {
        const partnerServiceBuildResult: BuildResult = {
            name: "PartnerService :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        const backendBuildResult: BuildResult = {
            name: "Frontend :: Build",
            activity: "Sleeping",
            lastBuildStatus: "Success",
            lastBuildLabel: "603",
            lastBuildTime: "2019-04-12T10:12:46Z",
            webUrl: "http://ci:8153/go/pipelines/Frontend/603/Build/1"
        };
        when(this.goCdGateway.getCompleteBuildDetails()).thenResolve([partnerServiceBuildResult, backendBuildResult]);

        const buildResult = await this.service.getPartnerServiceBuildDetails();

        expect(buildResult).to.deep.equal(partnerServiceBuildResult);
    }
}