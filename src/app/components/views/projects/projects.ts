import { Component, OnInit } from '@angular/core';
import { IconDefinition, faBriefcase, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../../../services/title-service';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../../services/project-service';
import { Project } from '../../../classes/project';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  public faBriefcase: IconDefinition = faBriefcase;
  public faSpinner: IconDefinition = faSpinner;

  public projects: Project[] = [];

  public loadingProjects: boolean = false;

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
    this.loadingProjects = true;
    this.projectService.getProjects()
    .then((projects) => {
      this.projects = projects;
      console.log(projects);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      this.loadingProjects = false;
    });
  }

}
