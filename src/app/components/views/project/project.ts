import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IconDefinition,
  faStarOfLife,
  faMagnifyingGlassPlus,
  faLink,
  faArrowUpRightFromSquare,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../../../services/title-service';
import { ProjectService } from '../../../services/project-service';
import { Project } from '../../../classes/project';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class ProjectComponent implements OnInit {
  public currentId: number = 0;

  public faStarOfLife: IconDefinition = faStarOfLife;
  public faMagnifyingGlassPlus: IconDefinition = faMagnifyingGlassPlus;
  public faLink: IconDefinition = faLink;
  public faArrowUpRightFromSquare: IconDefinition = faArrowUpRightFromSquare;
  public faBriefcase: IconDefinition = faBriefcase;

  public loadingProject: boolean = false;

  public currentProject?: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: TitleService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.setCurrentId();
    this.getProject();
  }

  private setCurrentId(): void {
    this.currentId = this.activatedRoute.snapshot.params['id'];
  }

  private setTitle(): void {
    this.title.setTitle(this.currentProject?.title);
  }

  private getProject(): void {
    this.loadingProject = true;
    this.projectService.getProject(this.currentId).then(project => {
      this.currentProject = project;
      this.setTitle();
    }).catch(error => {

    }).finally(() => {
      this.loadingProject = false;
    });
  }
}
