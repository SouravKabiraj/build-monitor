import {suite, test} from "mocha-typescript";
import {ComponentOutputManagerService} from "../../src/services/ComponentOutputManager.service";
import {Component, ComponentViewPin} from "../../src/models/Component.model";
import {ViewCode} from "../../src/models/RaspberryPiViewCode.model";
import {instance, mock, verify, when} from "ts-mockito";
import {RaspberryPiDriver} from "../../src/drivers/RaspberryPi.driver";
import {expect} from 'chai';

@suite
class ComponentOutputManagerServiceSpec {
    private service: ComponentOutputManagerService;
    private view = mock(RaspberryPiDriver);

    before(): void {
        this.service = new ComponentOutputManagerService(instance(this.view));
    }

    @test
    public async shouldChangeToPositiveStatusWhileComponentBuildFailed(): Promise<void> {
        const component = Component.PartnersFrontend;
        const componentStatus = ViewCode.ON;

        this.service.updateBuildStatusFor(component, componentStatus);

        verify(this.view.changePinStatusFor(ComponentViewPin.PartnersFrontend, componentStatus)).once();
    }

    @test
    public async shouldFetchViewStatusForComponent(): Promise<void> {
        const component = Component.PartnersFrontend;

        when(this.view.getPinStatusFor(ComponentViewPin.PartnersFrontend)).thenReturn(ViewCode.ON);

        const buildStatus = this.service.getBuildStatusFor(component);

        expect(buildStatus).to.be.equal(ViewCode.ON);
    }
}