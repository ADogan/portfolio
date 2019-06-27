import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

import { Project} from './project';
import { PROJECTS } from './projects-data';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    getProjects(): Observable<Project[]> {
      // this.projectService.add('ProjectService: fetched projects');
      return of(PROJECTS);
    }

  constructor() { }
}
