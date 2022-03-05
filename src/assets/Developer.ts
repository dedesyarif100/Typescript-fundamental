import { IamDeveloper } from './IamDeveloper';

export class Developer implements IamDeveloper {
    develop(): void {
        console.log('develop an app');
    }

    reactJs(): void {
        console.log('THIS IS REACT JS');
    }

    vueJs(): string {
        return 'vue js';
    }

    projectName(): string {
        return 'projectName';
    }

    projectLead(): string {
        return 'projectLead';
    }

    projectDeadline(): Date {
        return new Date();
    }

    projectFeature(): string[] {
        return ['RETURN STRING'];
    }
}