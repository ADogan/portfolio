import { Component, OnInit } from '@angular/core';
import {Project } from '../project';
import {PROJECTS} from '../projects-data'; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    selectedProject: Project;
    
    onSelect(project: Project): void {
        this.selectedProject = project;
    }
    deselect(): void{
        this.selectedProject = null;    
    }
    
    projects = PROJECTS;
    constructor() { }

    ngOnInit() {
    }

}
