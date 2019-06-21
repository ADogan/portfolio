import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import { HeaderComponent } from './common/header/header.component';
import { NavBarComponent } from './common/header/nav/nav-bar.component';
import { FooterComponent } from './common/footer/footer.component';

import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsComponent } from './pages/blog/posts/posts.component';
import { AboutmeComponent } from './pages/about/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    PostsComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    BlogComponent,
    FrontpageComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      NgbModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
