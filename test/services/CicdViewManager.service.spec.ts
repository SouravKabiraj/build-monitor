import {suite, test} from "mocha-typescript";
import {CicdViewManagerService} from "../../src/services/CicdViewManager.service";
import {anything, instance, mock, verify, when} from "ts-mockito";
import {ComponentBuildService} from "../../src/services/ComponentBuild.service";
import {ComponentOutputManagerService} from "../../src/services/ComponentOutputManager.service";
import {Component} from "../../src/models/Component.model";
import {ViewCode} from "../../src/models/RaspberryPiViewCode.model";

@suite
class CicdViewManagerServiceSpec {
    private service: CicdViewManagerService;
    private componentBuildService = mock(ComponentBuildService);
    private componentOutputManager = mock(ComponentOutputManagerService);

    before(): void {
        this.service = new CicdViewManagerService(instance(this.componentBuildService), instance(this.componentOutputManager));
    }

    @test
    public async shouldUpdateAllComponentBuildStatus(): Promise<void> {
        const failedBuild = {
            name: anything(),
            activity: anything(),
            lastBuildStatus: 'Failure',
            lastBuildLabel: anything(),
            lastBuildTime: anything(),
            webUrl: anything(),
        };
        const successfulBuild = {
            name: anything(),
            activity: anything(),
            lastBuildStatus: 'success',
            lastBuildLabel: anything(),
            lastBuildTime: anything(),
            webUrl: anything(),
        };

        when(this.componentBuildService.getAdminBuildDetails()).thenResolve(failedBuild);
        when(this.componentBuildService.getBackendBuildDetails()).thenResolve(failedBuild);
        when(this.componentBuildService.getFileManagementServiceBuildDetails()).thenResolve(successfulBuild);
        when(this.componentBuildService.getFrontendBuildDetails()).thenResolve(failedBuild);
        when(this.componentBuildService.getPartnerServiceBuildDetails()).thenResolve(successfulBuild);
        when(this.componentBuildService.getPartnersFrontendBuildDetails()).thenResolve(failedBuild);

        await this.service.updateCicdView();

        verify(this.componentOutputManager.updateBuildStatusFor(Component.Admin, ViewCode.OFF)).once();
        verify(this.componentOutputManager.updateBuildStatusFor(Component.Backend, ViewCode.OFF)).once();
        verify(this.componentOutputManager.updateBuildStatusFor(Component.FileManagementService, ViewCode.ON)).once();
        verify(this.componentOutputManager.updateBuildStatusFor(Component.Frontend, ViewCode.OFF)).once();
        verify(this.componentOutputManager.updateBuildStatusFor(Component.PartnerService, ViewCode.ON)).once();
        verify(this.componentOutputManager.updateBuildStatusFor(Component.PartnersFrontend, ViewCode.OFF)).once();
    }
}