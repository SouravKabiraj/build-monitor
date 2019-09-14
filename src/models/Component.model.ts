export enum Component {
    Frontend = 'Frontend',
    Backend = 'Backend',
    Admin = 'Admin',
    FileManagementService = 'FileManagementService',
    PartnersFrontend = 'PartnersFrontend',
    PartnerService = 'PartnerService',
    AdminSequel = 'AdminSequel',
    EligibilityCheckService = 'EligibilityCheckService',
    CreditAssessmentService = 'CreditAssessmentService',
    CreditBureauService = 'CreditBureauService',
    NotificationService = 'NotificationService'
}

export enum ComponentViewPin {
    BUILD_OUTPUT_SUCCESS = 4,
    BUILD_OUTPUT_FAIL = 26,
}

export const buildNameSeparator = ' :: ';

export enum Stage {
    Build = 'Build',
    QA = 'QA',
    Staging = 'Staging',
    Production = 'Production'
}


export class ComponentModel {
    static getAllComponents(): string[] {
        return Object.keys(Component);
    }
}