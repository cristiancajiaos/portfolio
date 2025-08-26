import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faBriefcase, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  public faBriefcase: IconDefinition = faBriefcase;

  constructor(
    private title: Title
  ) {

  }

  ngOnInit(): void {
    this.setTitle();
  }

  public setTitle(): void {
    this.title.setTitle("Proyectos | Portafolio de Cristian Cajiao");
  }

}
