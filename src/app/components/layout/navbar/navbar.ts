import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { faBriefcase, faComments, faCertificate, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit, OnDestroy {

  public faBriefcase: IconDefinition = faBriefcase;
  public faComments: IconDefinition = faComments;
  public faCertificate: IconDefinition = faCertificate;

  public isCollapsed: boolean = false;
  private routerEventsSubscription?: Subscription;

  constructor(
    private router: Router
  ) {}


  ngOnInit(): void {
    this.setListenRouterEvents()
  }

  public setListenRouterEvents(): void {
    this.routerEventsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isCollapsed = true;
      }
    });
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }


}
