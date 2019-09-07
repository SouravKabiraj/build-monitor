"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_model_1 = require("../models/Component.model");
const onoff_1 = require("onoff");
const inversify_1 = require("inversify");
require("reflect-metadata");
let RaspberryPiDriver = class RaspberryPiDriver {
    changeBuildStatus(status) {
        try {
            const led = new onoff_1.Gpio(Component_model_1.ComponentViewPin.BUILD_OUTPUT, 'out');
            led.writeSync(status);
        }
        catch (e) {
            console.log(`${Component_model_1.ComponentViewPin.BUILD_OUTPUT} --> ${status}`);
        }
    }
};
RaspberryPiDriver = __decorate([
    inversify_1.injectable()
], RaspberryPiDriver);
exports.RaspberryPiDriver = RaspberryPiDriver;
