import { Component, OnInit } from '@angular/core';
import { faBriefcase, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../../../services/title-service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  public faBriefcase: IconDefinition = faBriefcase;

  constructor(
    private title: TitleService
  ) {

  }

  ngOnInit(): void {
    this.setTitle();
  }

  public setTitle(): void {
    this.title.setTitle("Proyectos");
  }
}
