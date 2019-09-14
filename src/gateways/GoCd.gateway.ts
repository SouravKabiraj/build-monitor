import request = require('superagent');
import {BuildResult} from "../models/BuildResult";
import {injectable} from "inversify";
import * as jsonXmlConverter from 'xml-js';

@injectable()
export class GoCdGateway {
    async getCompleteBuildDetails(): Promise<BuildResult[]> {
        try {
            const response = await request
                // http://www.mocky.io/v2/5d7cbaf03500002747913b6a
                // http://35.154.139.4:8153/go/cctray.xml
                //.get('http://35.154.139.4:8153/go/cctray.xml')
                .get('http://www.mocky.io/v2/5d7cbd66350000d347913b6d')
                .auth('build-monitor', 'bu!ldm0n!t0r', {type: 'basic'})
                .set('Accept', 'application/vnd.go.cd.v1+json')
                .send();
            const json = jsonXmlConverter.xml2json(response.body);
            return JSON.parse(json).elements[0].elements.map((ele: any) => ele.attributes);
        } catch (error) {
            console.log('Failed to fetch build details');
            throw error;
        }
    }
}

// bu!ldm0n!t0r
// 952c821acc9118acb6c48ae5ee74eacbbdea9814