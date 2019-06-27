import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    currentPath: any;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe( ( event: Event) => {
            if(event instanceof NavigationEnd ) {
                this.currentPath = event.url;
            }
        })
    }

}
