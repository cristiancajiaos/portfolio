import { Component, OnInit, signal } from '@angular/core';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('portfolio');

  constructor(
    private ngbTooltipConfig: NgbTooltipConfig
  ) {
    this.ngbTooltipConfig.container = "body";
    this.ngbTooltipConfig.tooltipClass = "default-font";
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
