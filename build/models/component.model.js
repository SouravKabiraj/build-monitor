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
    Component["EligibilityCheckService"] = "EligibilityCheckService";
})(Component = exports.Component || (exports.Component = {}));
var ComponentViewPin;
(function (ComponentViewPin) {
    ComponentViewPin[ComponentViewPin["BUILD_OUTPUT"] = 4] = "BUILD_OUTPUT";
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
    static getAllComponents() {
        return Object.keys(Component);
    }
}
exports.ComponentModel = ComponentModel;
