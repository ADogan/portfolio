import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { AboutmeComponent } from './pages/about/aboutme.component';

export const appRoutes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectDetailComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'home', component: FrontpageComponent },
    { path: '', component: FrontpageComponent, pathMatch: 'prefix' },
    { path: '**', redirectTo: 'projects', pathMatch: 'full' }
];
