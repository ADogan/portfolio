import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

import { Project} from './project';
import { PROJECTS } from './projects-data';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    getProjects(): Observable<Project[]> {
      // send message after fetching projects
      this.messageService.add('ProjectService: fetched projects');
      return of(PROJECTS);
    }

  constructor(private messageService: MessageService) { }
}
