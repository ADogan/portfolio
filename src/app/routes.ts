import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { AboutmeComponent } from './pages/about/aboutme.component';

export const appRoutes: Routes = [
    { path: 'blog', component: BlogComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectDetailComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: '', component: FrontpageComponent, pathMatch: 'prefix' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
