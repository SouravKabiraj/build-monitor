import {suite, test} from "mocha-typescript";
import {GoCdGateway} from "../../src/gateways/goCd.gateway";
import {expect} from 'chai';

@suite
class GoCdGatewaySpec {
    private gateway: GoCdGateway;

    before(): void {
        this.gateway = new GoCdGateway();
    }

    @test
    public async shouldGetUpdatedCookie(): Promise<void> {
        const result = await this.gateway.getNewCookie();

        expect(result).to.have.property('SetCookie');
    }

    @test
    public async shouldGetCompleteBuildDetails(): Promise<void> {

    }
}