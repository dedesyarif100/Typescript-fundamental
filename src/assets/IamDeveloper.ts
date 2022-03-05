import { ProjectManager } from "./ProjectManager";

export interface IamDeveloper extends ProjectManager {
    develop: () => void
    reactJs: () => void
    vueJs: () => string
}