import { Component, OnInit } from '@angular/core';
import {Project } from '../project';
import {ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    selectedProject: Project;
    projects: Project[];
    
    onSelect(project: Project): void {
        if(this.selectedProject === project) {
            this.selectedProject = null;    
        } else {
            this.selectedProject = project;
        }
    }

    getProjects(): void {
        this.projectService.getProjects()
            .subscribe(projects => this.projects = projects);
    }
    
    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.getProjects();
    }

}
