"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const goCd_gateway_1 = require("../gateways/goCd.gateway");
const component_model_1 = require("../models/component.model");
let ComponentBuildService = class ComponentBuildService {
    constructor(goCdGateway) {
        this.goCdGateway = goCdGateway;
    }
    getFrontendBuildDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const completeBuildResult = yield this.goCdGateway.getCompleteBuildDetails();
            return completeBuildResult.find(buildResult => buildResult.name === component_model_1.Component.Frontend + component_model_1.buildNameSeparator + component_model_1.Stage.Build);
        });
    }
    getBackendBuildDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const completeBuildResult = yield this.goCdGateway.getCompleteBuildDetails();
            return completeBuildResult.find(buildResult => buildResult.name === component_model_1.Component.Backend + component_model_1.buildNameSeparator + component_model_1.Stage.Build);
        });
    }
    getAdminBuildDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const completeBuildResult = yield this.goCdGateway.getCompleteBuildDetails();
            return completeBuildResult.find(buildResult => buildResult.name === component_model_1.Component.Admin + component_model_1.buildNameSeparator + component_model_1.Stage.Build);
        });
    }
    getFileManagementServiceBuildDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const completeBuildResult = yield this.goCdGateway.getCompleteBuildDetails();
            return completeBuildResult.find(buildResult => buildResult.name === component_model_1.Component.FileManagementService + component_model_1.buildNameSeparator + component_model_1.Stage.Build);
        });
    }
    getPartnersFrontendBuildDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const completeBuildResult = yield this.goCdGateway.getCompleteBuildDetails();
            return completeBuildResult.find(buildResult => buildResult.name === component_model_1.Component.PartnersFrontend + component_model_1.buildNameSeparator + component_model_1.Stage.Build);
        });
    }
    getPartnerServiceBuildDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const completeBuildResult = yield this.goCdGateway.getCompleteBuildDetails();
            return completeBuildResult.find(buildResult => buildResult.name === component_model_1.Component.PartnerService + component_model_1.buildNameSeparator + component_model_1.Stage.Build);
        });
    }
};
ComponentBuildService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [goCd_gateway_1.GoCdGateway])
], ComponentBuildService);
exports.ComponentBuildService = ComponentBuildService;
