"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
class Developer {
    develop() {
        console.log('develop an app');
    }
    reactJs() {
        console.log('THIS IS REACT JS');
    }
    vueJs() {
        return 'vue js';
    }
    projectName() {
        return 'projectName';
    }
    projectLead() {
        return 'projectLead';
    }
    projectDeadline() {
        return new Date();
    }
    projectFeature() {
        return ['RETURN STRING'];
    }
}
exports.Developer = Developer;
