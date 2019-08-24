"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component;
(function (Component) {
    Component["Frontend"] = "Frontend";
    Component["Backend"] = "Backend";
    Component["Admin"] = "Admin";
    Component["FileManagementService"] = "FileManagementService";
    Component["PartnersFrontend"] = "PartnersFrontend";
    Component["PartnerService"] = "PartnerService";
    Component["AdminSequel"] = "AdminSequel";
})(Component = exports.Component || (exports.Component = {}));
var ComponentViewPin;
(function (ComponentViewPin) {
    ComponentViewPin[ComponentViewPin["Frontend"] = 0] = "Frontend";
    ComponentViewPin[ComponentViewPin["Backend"] = 1] = "Backend";
    ComponentViewPin[ComponentViewPin["Admin"] = 2] = "Admin";
    ComponentViewPin[ComponentViewPin["FileManagementService"] = 3] = "FileManagementService";
    ComponentViewPin[ComponentViewPin["PartnersFrontend"] = 4] = "PartnersFrontend";
    ComponentViewPin[ComponentViewPin["PartnerService"] = 5] = "PartnerService";
    ComponentViewPin[ComponentViewPin["AdminSequel"] = 6] = "AdminSequel";
})(ComponentViewPin = exports.ComponentViewPin || (exports.ComponentViewPin = {}));
exports.buildNameSeparator = ' :: ';
var Stage;
(function (Stage) {
    Stage["Build"] = "Build";
    Stage["QA"] = "QA";
    Stage["Staging"] = "Staging";
    Stage["Production"] = "Production";
})(Stage = exports.Stage || (exports.Stage = {}));
class ComponentModel {
    static getComponentViewPinFor(component) {
        switch (component) {
            case Component.Frontend:
                return ComponentViewPin.Frontend;
            case Component.Backend:
                return ComponentViewPin.Backend;
            case Component.Admin:
                return ComponentViewPin.Admin;
            case Component.FileManagementService:
                return ComponentViewPin.FileManagementService;
            case Component.PartnersFrontend:
                return ComponentViewPin.PartnersFrontend;
            case Component.PartnerService:
                return ComponentViewPin.PartnerService;
            case Component.AdminSequel:
                return ComponentViewPin.AdminSequel;
        }
    }
}
exports.ComponentModel = ComponentModel;
