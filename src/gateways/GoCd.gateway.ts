import request = require('superagent');
import {BuildResult} from "../models/BuildResult";
import {injectable} from "inversify";
import * as jsonXmlConverter from 'xml-js';
import {FileLogUtility} from "../utility/file-log.utility";

@injectable()
export class GoCdGateway {
    async getCompleteBuildDetails(): Promise<BuildResult[]> {
        try {
            const response = await request
                .get('http://www.mocky.io/v2/5d7cbd66350000d347913b6d')
                .auth('build-monitor', 'bu!ldm0n!t0r', {type: 'basic'})
                .set('Accept', 'application/vnd.go.cd.v1+json')
                .send();
            const json = jsonXmlConverter.xml2json(response.body);
            return JSON.parse(json).elements[0].elements.map((ele: any) => ele.attributes);
        } catch (error) {
            await FileLogUtility.log('Failed to fetch build details');
            await FileLogUtility.log(`ERROR : ${error.toString()}`);
        }
    }
}