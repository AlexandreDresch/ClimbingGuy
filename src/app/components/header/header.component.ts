import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentRouteIsHome: boolean = false;
  currentRouteIsContent: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRouteIsHome = event.urlAfterRedirects === '/';
        this.currentRouteIsContent = event.urlAfterRedirects === '/content';
      }
    });
  }
  goDown() {
    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
