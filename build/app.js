"use strict";
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
const cicdViewManager_service_1 = require("./services/cicdViewManager.service");
console.log('Hello Finzy..');
console.log('GoCD build monitor is starting...');
console.log('GoCD build monitor is running...');
const container = new inversify_1.Container({ autoBindInjectable: true });
const cicdViewManager = container.get(cicdViewManager_service_1.CicdViewManagerService);
setInterval(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield cicdViewManager.updateCicdView();
    });
}, 1000);
