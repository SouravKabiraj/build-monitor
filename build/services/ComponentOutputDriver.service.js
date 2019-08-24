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
const component_model_1 = require("../models/component.model");
const raspberryPi_driver_1 = require("../drivers/raspberryPi.driver");
const inversify_1 = require("inversify");
require("reflect-metadata");
let ComponentOutputDriverService = class ComponentOutputDriverService {
    constructor(view) {
        this.view = view;
    }
    updateBuildStatusFor(component, componentStatus) {
        const viewPin = component_model_1.ComponentModel.getComponentViewPinFor(component);
        try {
            this.view.changePinStatusFor(viewPin, componentStatus);
        }
        catch (e) {
            console.log(`${component} ----> ${componentStatus}`);
        }
    }
    getBuildStatusFor(component) {
        const viewPin = component_model_1.ComponentModel.getComponentViewPinFor(component);
        return this.view.getPinStatusFor(viewPin);
    }
};
ComponentOutputDriverService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [raspberryPi_driver_1.RaspberryPiDriver])
], ComponentOutputDriverService);
exports.ComponentOutputDriverService = ComponentOutputDriverService;
