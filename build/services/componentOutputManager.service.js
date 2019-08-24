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
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../models/component");
const raspberryPi_view_1 = require("../views/raspberryPi.view");
const inversify_1 = require("inversify");
require("reflect-metadata");
let ComponentOutputManagerService = class ComponentOutputManagerService {
    constructor(view) {
        this.view = view;
    }
    updateBuildStatusFor(component, componentStatus) {
        const viewPin = component_1.ComponentModel.getComponentViewPinFor(component);
        this.view.changePinStatusFor(viewPin, componentStatus);
    }
    getBuildStatusFor(component) {
        const viewPin = component_1.ComponentModel.getComponentViewPinFor(component);
        return this.view.getPinStatusFor(viewPin);
    }
};
ComponentOutputManagerService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [raspberryPi_view_1.RaspberryPiView])
], ComponentOutputManagerService);
exports.ComponentOutputManagerService = ComponentOutputManagerService;
