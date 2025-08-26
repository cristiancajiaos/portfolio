import { Component, OnInit } from '@angular/core';
import { faBriefcase, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../../../services/title-service';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../../services/project-service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  public faBriefcase: IconDefinition = faBriefcase;

  public getProjectsSubscription?: Subscription;

  constructor(
    private title: TitleService,
    private projectService: ProjectService
  ) {

  }

  ngOnInit(): void {
    this.setTitle();
    this.getProjects();
  }

  private setTitle(): void {
    this.title.setTitle("Proyectos");
  }

  private getProjects(): void {
    this.projectService.getProjects()
    .then((projects) => {
      console.log(projects)})
    .catch((error) => {
      console.log(error)
    });
  }

}
