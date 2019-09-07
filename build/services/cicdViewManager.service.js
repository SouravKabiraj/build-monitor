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
const ComponentBuild_service_1 = require("./ComponentBuild.service");
const Component_model_1 = require("../models/Component.model");
const RaspberryPiViewCode_model_1 = require("../models/RaspberryPiViewCode.model");
const inversify_1 = require("inversify");
const RaspberryPi_driver_1 = require("../drivers/RaspberryPi.driver");
let CicdViewManagerService = class CicdViewManagerService {
    constructor(componentBuildService, raspberryPiDriver) {
        this.componentBuildService = componentBuildService;
        this.raspberryPiDriver = raspberryPiDriver;
    }
    updateCicdView() {
        return __awaiter(this, void 0, void 0, function* () {
            const components = Component_model_1.ComponentModel.getAllComponents();
            for (let index = 0; index < components.length; index++) {
                const buildResult = yield this.componentBuildService.getBuildDetailsFor(components[index]);
                if (buildResult.lastBuildStatus === 'Failure') {
                    this.raspberryPiDriver.changeBuildStatus(RaspberryPiViewCode_model_1.ViewCode.OFF);
                    return;
                }
                else {
                    console.log(`${components[index]} ---> OK`);
                    continue;
                }
            }
            this.raspberryPiDriver.changeBuildStatus(RaspberryPiViewCode_model_1.ViewCode.ON);
        });
    }
};
CicdViewManagerService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [ComponentBuild_service_1.ComponentBuildService, RaspberryPi_driver_1.RaspberryPiDriver])
], CicdViewManagerService);
exports.CicdViewManagerService = CicdViewManagerService;
