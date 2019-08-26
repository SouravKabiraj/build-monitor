"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const inversify_1 = require("inversify");
const jsonXmlConverter = __importStar(require("xml-js"));
let GoCdGateway = class GoCdGateway {
    getCompleteBuildDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield request
                    .get('http://35.154.139.4:8153/go/cctray.xml')
                    .auth('build-monitor', 'bu!ldm0n!t0r', { type: 'basic' })
                    .set('Accept', 'application/vnd.go.cd.v1+json')
                    .send();
                const json = jsonXmlConverter.xml2json(response.body);
                return JSON.parse(json).elements[0].elements.map((ele) => ele.attributes);
            }
            catch (error) {
                console.log('Failed to fetch build details');
                throw error;
            }
        });
    }
};
GoCdGateway = __decorate([
    inversify_1.injectable()
], GoCdGateway);
exports.GoCdGateway = GoCdGateway;
// bu!ldm0n!t0r
// 952c821acc9118acb6c48ae5ee74eacbbdea9814
