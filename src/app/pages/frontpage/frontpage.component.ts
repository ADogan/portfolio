import { Component } from '@angular/core';
import {Project } from '../projects/project';
import {ProjectService } from '../projects/project.service';

@Component({
    templateUrl: 'frontpage.component.html',
    styleUrls: ['frontpage.component.css']
})
export class FrontpageComponent {
    projects: Project[];

    getProjects(): void {
        this.projectService.getProjects()
            .subscribe(projects => this.projects = projects);
    }
    constructor(private projectService: ProjectService) {}


    ngOnInit() {
        this.getProjects();
    }
}
