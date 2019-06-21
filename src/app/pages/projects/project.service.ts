import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

import { Project} from './project';
import { PROJECTS } from './projects-data';
import { PostService } from '../blog/post.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    getProjects(): Observable<Project[]> {
      this.postService.add('ProjectService: fetched projects');
      return of(PROJECTS);
    }

  constructor(private postService: PostService) { }
}
