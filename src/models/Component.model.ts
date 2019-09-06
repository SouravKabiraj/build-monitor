export enum Component {
    Frontend = 'Frontend',
    Backend = 'Backend',
    Admin = 'Admin',
    FileManagementService = 'FileManagementService',
    PartnersFrontend = 'PartnersFrontend',
    PartnerService = 'PartnerService',
    AdminSequel = 'AdminSequel',
    EligibilityCheckService = 'EligibilityCheckService'
}

export enum ComponentViewPin {
    Frontend = 0,
    Backend = 1,
    Admin = 2,
    FileManagementService = 3,
    PartnersFrontend = 4,
    PartnerService = 5,
    AdminSequel = 6,
    EligibilityCheckService = 21
}

export const buildNameSeparator = ' :: ';

export enum Stage {
    Build = 'Build',
    QA = 'QA',
    Staging = 'Staging',
    Production = 'Production'
}


export class ComponentModel {
    static getComponentViewPinFor(component: Component): ComponentViewPin {
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
            case Component.EligibilityCheckService:
                return ComponentViewPin.EligibilityCheckService;
        }
    }
}