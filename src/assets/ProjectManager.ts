export interface ProjectManager {
    projectName: () => string;
    projectLead: () => string;
    projectDeadline: () => Date;
    projectFeature: () => string[];
}