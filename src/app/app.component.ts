import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <main role="main" class="container">
    <router-outlet></router-outlet>
      </main><!-- /.container -->
    <app-footer></app-footer>
    `
})
export class AppComponent {

}
